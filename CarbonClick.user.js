// ==UserScript==
// @name         CarbonClick
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  auto click button on Carbon to save image to clipboard
// @author       ljs-2002
// @match        https://carbon.now.sh/?bg*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=now.sh
// @grant        none
// ==/UserScript==

(function() {
    window.onload =(function() {
        // 获取所有的按钮元素
        var buttons = document.querySelectorAll('button');

        // 循环遍历每个按钮
        for(var button of buttons){
            if (button.textContent === 'Copy menu') {
                // 找到copy按钮后点击
                button.click();
                break;
            }
        }
        //找到保存图片按钮并点击
        var new_buttons = document.querySelector('#export-clipboard');
        new_buttons.click();
        console.log('done')
    });
    window.alert("复制成功");
})();

