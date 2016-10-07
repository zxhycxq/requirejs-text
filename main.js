/*
* @Author: anchen
* @Date:   2016-10-07 16:22:28
* @Last Modified by:   anchen
* @Last Modified time: 2016-10-07 16:31:33
*/

requirejs.config({
    paths:{
        jquery:'jquery.min'
    }
});

requirejs(['jquery','yanzheng'],function($,yanzheng){
    // $('body').css('background-color','red');
	console.log(yanzheng.isEqual(2,2));
});