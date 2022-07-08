const debug = process.env.NODE_ENV !== 'production';
// 开发环境和正式环境中都会显示的静态菜单
import menus from './static_menu/menu.json'
var menusList = [];

menusList = menus;

export default menusList;
