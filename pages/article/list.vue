<template>
  <view class="page-body">
    <!-- 页面内容开始 -->

    <!-- 表格搜索组件开始 -->
    <vk-data-table-query
      v-model="queryForm1.formData"
      :columns="queryForm1.columns"
      @search="search"
    >
    </vk-data-table-query>
    <!-- 表格搜索组件结束 -->

    <!-- 自定义按钮区域开始 -->
    <view>
      <el-row>
        <el-button
          type="success"
          size="small"
          icon="el-icon-circle-plus-outline"
          @click="addBtn"
          >添加</el-button
        >
      </el-row>
    </view>
    <!-- 自定义按钮区域结束 -->

    <!-- 表格组件开始 -->
    <vk-data-table
      ref="articleTable"
      :action="articleTable.action"
      :columns="articleTable.columns"
      :query-form-param="queryForm1"
      :right-btns="['update', 'delete']"
      :selection="false"
      :row-no="true"
      :pagination="true"
      @update="updateBtn"
      @delete="deleteBtn"
      @current-change="currentChange"
      @selection-change="selectionChange"
    >
    </vk-data-table>
    <!-- 表格组件结束 -->

    <!-- 添加或编辑的弹窗开始 -->
    <el-drawer
      :title="drawerTitle"
      :before-close="handleClose"
      :visible.sync="showArticle"
      direction="rtl"
      custom-class="demo-drawer"
      ref="drawer"
      size="50%"
    >
      <div class="drawer_content">
        <el-form
          ref="form"
          :model="articleForm"
          label-position="top"
          label-width="80px"
        >
          <el-form-item label="文章标题">
            <el-input v-model="articleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="添加时间">
            <el-date-picker
              v-model="articleForm._add_time_str"
              value-format="yyyy-MM-dd HH:mm:ss"
              format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="文章分类">
            <el-tag
              v-for="(tag, index) in categoryList"
              :key="index"
              :type="tag.type"
              closable
              :disable-transitions="false"
              @click="categoryClick(tag, index)"
              @close="handleCategoryClose(tag)"
              effect="dark"
            >
              {{ tag._id }}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="categoryVisible"
              v-model="categoryValue"
              ref="saveCategoryInput"
              size="small"
              @keyup.enter.native="handleCategoryConfirm"
              @blur="handleCategoryConfirm"
            >
            </el-input>
            <el-button
              v-else
              class="button-new-tag"
              size="small"
              @click="showCategoryInput"
              >+ New category</el-button
            >
          </el-form-item>
          <el-form-item label="文章标签">
            <el-tag
              v-for="(tag, index) in tagList"
              :key="index"
              :type="tag.type"
              closable
              :disable-transitions="false"
              @click="tagClick(tag, index)"
              @close="handleTagClose(tag)"
              effect="dark"
            >
              {{ tag._id }}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="tagVisible"
              v-model="tagValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleTagConfirm"
              @blur="handleTagConfirm"
            >
            </el-input>
            <el-button
              v-else
              class="button-new-tag"
              size="small"
              @click="showTagInput"
              >+ New Tag</el-button
            >
          </el-form-item>
          <el-form-item label="文章内容">
            <mavon-editor
              ref="mdEditor"
              v-model="articleForm.content"
              @imgAdd="$imgAdd"
            ></mavon-editor>
          </el-form-item>
        </el-form>
      </div>
      <div class="drawer_footer">
        <el-button type="primary" @click="articleFormSubmit"
          >立即创建</el-button
        >
        <el-button @click="cancelForm">取消</el-button>
      </div>
    </el-drawer>
    <!-- 添加或编辑的弹窗结束 -->

    <!-- 页面内容结束 -->
  </view>
</template>

<script>
var that
var vk = uni.vk // vk实例
export default {
  data() {
    // 页面数据变量
    return {
      // 页面是否请求中或加载中
      loading: false,
      // init请求返回的数据
      data: {},
      // 表格相关开始 -----------------------------------------------------------
      articleTable: {
        // 表格数据请求地址
        action: 'admin/article/sys/getList',
        // 表格字段显示规则
        columns: [
          {
            key: '_id',
            title: 'id',
            type: 'text',
          },
          {
            key: 'title',
            title: '标题',
            type: 'text',
            sortable: 'custom',
          },
          {
            key: 'viewCount',
            title: '查看次数',
            type: 'text',
          },
          {
            key: '_add_time',
            title: '添加时间',
            type: 'time',
            sortable: 'custom',
          },
        ],
        // 多选框选中的值
        multipleSelection: [],
        // 当前高亮的记录
        selectItem: '',
      },
      // 表格相关结束 -----------------------------------------------------------
      // 表单相关开始 -----------------------------------------------------------
      // 查询表单请求数据
      queryForm1: {
        // 查询表单数据源，可在此设置默认值
        formData: {},
        // 查询表单的字段规则 fieldName:指定数据库字段名,不填默认等于key
        columns: [
          {
            key: 'title',
            title: '标题',
            type: 'text',
            width: 160,
            mode: '%%',
          },
          {
            key: '_add_time',
            title: '添加时间',
            type: 'datetimerange',
            width: 400,
            mode: '[]',
          },
        ],
      },
      articleForm: {
        title: '',
        content: '',
        viewCount: 0,
        _add_time: '',
        _add_time_str: '',
      },
      showArticle: false,
      drawerTitle: '文章管理',
      categorySelectList: [],
      categoryList: [],
      tagList: [],
      tagSelectList: [],
      categoryVisible: false,
      categoryValue: '',
      tagVisible: false,
      tagValue: '',
    }
  },
  // 监听 - 页面每次【加载时】执行(如：前进)
  onLoad(options = {}) {
    that = this
    vk = this.vk
    this.options = options
  },
  // 监听 - 页面【首次渲染完成时】执行。注意如果渲染速度快，会在页面进入动画完成前触发
  onReady() {},
  // 监听 - 页面每次【显示时】执行(如：前进和返回) (页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面)
  onShow() {},
  // 监听 - 页面每次【隐藏时】执行(如：返回)
  onHide() {},
  // 函数
  methods: {
    // 文章提交
    articleFormSubmit() {
      if (!this.articleForm.title) {
        this.$message.error('请填写文章标题！')
        return
      }
      if (!this.articleForm.content) {
        this.$message.error('请填写文章内容！')
        return
      }
      if (this.categoryList.length == 0) {
        this.$message.error('请选择至少一个分类！')
        return
      }
      if (this.tagList.length == 0) {
        this.$message.error('请选择至少一个标签！')
        return
      }
      this.articleForm.content = this.$refs.mdEditor.d_render
      this.articleForm._add_time = new Date(
        this.articleForm._add_time_str
      ).getTime()
      if (this.articleForm._id) {
        vk.callFunction({
          url: 'admin/article/sys/update',
          data: this.articleForm,
          success: (data) => {
            const { categoryList, tagList } = this.parseList(
              this.categorySelectList,
              this.tagSelectList,
              this.articleForm._id
            )
            this.categoryAdd(categoryList)
            this.tagAdd(tagList)
            this.showArticle = false
            this.$refs.articleTable.refresh()
          },
          complete() {},
        })
      } else {
        vk.callFunction({
          url: 'admin/article/sys/add',
          data: this.articleForm,
          success: (data) => {
            const articleId = data.id
            const { categoryList, tagList } = this.parseList(
              this.categorySelectList,
              this.tagSelectList,
              articleId
            )
            this.categoryAdd(categoryList)
            this.tagAdd(tagList)
            this.showArticle = false
            this.$refs.articleTable.refresh()
          },
          complete() {},
        })
      }
    },
    // 分类新增
    categoryAdd(categoryList) {
      vk.callFunction({
        url: 'admin/category/sys/add',
        data: categoryList,
        success: (data) => {
          console.log(`=========================分类新增完毕`)
        },
        complete() {},
      })
    },
    // 标签新增
    tagAdd(tagList) {
      vk.callFunction({
        url: 'admin/tag/sys/add',
        data: tagList,
        success: (data) => {
          console.log(`=========================标签新增完毕`)
        },
        complete() {},
      })
    },
    // 数组序列化
    parseList(categoryList, tagList, articleId) {
      let newList1 = []
      let newList2 = []
      if (categoryList) {
        categoryList.forEach((category) => {
          newList1.push({
            name: category._id,
            articleId: articleId,
          })
        })
      }
      if (tagList) {
        tagList.forEach((tag) => {
          newList2.push({
            name: tag._id,
            articleId: articleId,
          })
        })
      }
      return {
        categoryList: newList1,
        tagList: newList2,
      }
    },
    // 标签点击选中
    tagClick(tag, index) {
      //灰色代表位选中，蓝色代表已经选中
      if (tag.type == 'info') {
        ;(tag.type = ''), this.tagSelectList.push(tag)
      } else {
        tag.type = 'info'
        this.tagSelectList.splice(this.tagSelectList.indexOf(tag), 1)
      }
    },
    // 分类点击选中
    categoryClick(category, index) {
      //灰色代表位选中，蓝色代表已经选中
      if (category.type == 'info') {
        ;(category.type = ''), this.categorySelectList.push(category)
      } else {
        category.type = 'info'
        this.categorySelectList.splice(
          this.categorySelectList.indexOf(category),
          1
        )
      }
    },
    // 显示标签文本框
    showTagInput() {
      this.tagVisible = true
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    // 文本框输入完毕
    handleTagConfirm() {
      let tagValue = this.tagValue
      if (tagValue) {
        this.tagList.push({
          _id: tagValue,
          type: '',
        })
        this.tagSelectList.push({
          _id: tagValue,
          type: '',
        })
      }
      this.tagVisible = false
      this.tagValue = ''
    },
    // 标签删除
    handleTagClose(tag) {
      this.tagList.splice(this.tagList.indexOf(tag), 1)
    },
    showCategoryInput() {
      this.categoryVisible = true
      this.$nextTick((_) => {
        this.$refs.saveCategoryInput.$refs.input.focus()
      })
    },
    handleCategoryConfirm() {
      let categoryValue = this.categoryValue
      if (categoryValue) {
        this.categoryList.push({
          _id: categoryValue,
          type: '',
        })
        this.categorySelectList.push({
          _id: categoryValue,
          type: '',
        })
      }
      this.categoryVisible = false
      this.categoryValue = ''
    },
    handleCategoryClose(categoty) {
      this.categoryList.splice(this.categoryList.indexOf(categoty), 1)
    },
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      const base64File = $file.miniurl
      vk.pubfn.base64ToFile({
        base64: base64File,
        success: function (file) {
          const filePath = file.path
          console.log(filePath)
          vk.callFunctionUtil.uploadFile({
            title: '上传中...',
            filePath: filePath,
            fileType: 'image',
            success(res) {
              that.$refs.mdEditor.$img2Url(pos, res.url)
            },
          })
        },
      })
    },
    // 获取所有分类
    getCategoryAndTagList(item) {
      vk.callFunction({
        url: 'admin/article/sys/getCategoryAndTag',
        data: {
          pageSize: -1,
        },
        success: (data) => {
          that.categoryList = data.categoryList
          that.tagList = data.tagList
          if (item) {
            item.categoryList = this.hightlightCategory(item.categoryList)
            item.tagList = this.hightlightTag(item.tagList)
            that.articleForm = item
            that.showArticle = true
          }
        },
        complete() {},
      })
    },
    handleClose(done) {
      this.showArticle = false
    },
    cancelForm() {
      this.showArticle = false
    },

    // 页面跳转
    pageTo(path) {
      vk.navigateTo(path)
    },

    // 搜索
    search() {
      this.$refs.articleTable.search()
    },
    // 刷新
    refresh() {
      this.$refs.articleTable.refresh()
    },
    // 获取当前选中的行的数据
    getCurrentRow() {
      return this.$refs.articleTable.getCurrentRow()
    },
    // 监听 - 行的选中高亮事件
    currentChange(val) {
      this.articleTable.selectItem = val
    },
    // 当选择项发生变化时会触发该事件
    selectionChange(list) {
      this.articleTable.multipleSelection = list
    },
    // resetForm
    resetForm() {
      this.categoryList = []
      this.tagList = []
      this.categorySelectList = []
      this.tagSelectList = []
      this.articleForm = {
        title: '',
        content: '',
        viewCount: 0,
        _add_time: '',
        _add_time_str: '',
      }
    },
    // 显示添加页面
    addBtn() {
      this.resetForm()
      this.getCategoryAndTagList()
      this.showArticle = true
    },
    // 显示修改页面
    updateBtn({ item }) {
      this.resetForm()
      this.getCategoryAndTagList(item)
      // item._add_time_str = moment(
      //   new Date(
      //     new Date().getTime() -
      //       1000 * 60 * 60 * 2 * Math.floor(Math.random() * 10000)
      //   ).getTime()
      // ).format('YYYY-MM-DD HH:mm')
      console.log(item)
    },
    // 高亮选中标签，分类
    hightlightCategory(categoryList) {
      for (let i = 0; i < this.categoryList.length; i++) {
        for (let j = 0; j < categoryList.length; j++) {
          if (this.categoryList[i]._id == categoryList[j]._id) {
            this.categoryList[i].type = ''
          }
        }
      }
      this.categorySelectList = categoryList
      return categoryList
    },
    hightlightTag(tagList) {
      for (let i = 0; i < this.tagList.length; i++) {
        for (let j = 0; j < tagList.length; j++) {
          if (this.tagList[i]._id == tagList[j]._id) {
            this.tagList[i].type = ''
          }
        }
      }
      this.tagSelectList = tagList
      return tagList
    },
    // 删除按钮
    deleteBtn({ item, deleteFn }) {
      deleteFn({
        action: 'admin/article/sys/delete',
        data: {
          _id: item._id,
        },
      })
    },
  },
  // 监听属性
  watch: {},
  // 过滤器
  filters: {},
  // 计算属性
  computed: {},
}
</script>
<style lang="scss" scoped>
.drawer_content {
  padding: 0 20px;
  .el-tag {
    cursor: pointer;
    margin-right: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
}
.drawer_footer {
  position: fixed;
  bottom: 0;
  z-index: 99999;
  width: 50%;
  text-align: center;
  margin-bottom: 20px;
}
</style>
