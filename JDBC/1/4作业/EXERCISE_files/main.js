var language = "javascript";
$(document).ready(function () {
    $("pre.line").snippet(language, { style: "acid", menu: false, box: "#eee", showNum: false });
    $("pre.code").snippet(language, { style: "acid", menu: false, box: "#eee" });
    $("pre.hide").snippet(language, { style: "acid", menu: false, box: "#eee", collapse: true, showMsg: "代码", hideMsg: "隐藏" });
    modiBoldCode();
});

//设置强调代码的样式：将hr之间的内容添加新样式，并去掉hr
function modiBoldCode() {
    var preList = document.getElementsByTagName("pre");
    for (var i = 0; i < preList.length; i++) {
        var liNodes = preList[i].getElementsByTagName("li");
        for (var j = 0; j < liNodes.length; j++) {
            if (liNodes[j].innerHTML.indexOf("#cold_bold") > -1) {
                liNodes[j].className = "bold_code";
                liNodes[j].innerHTML = liNodes[j].innerHTML.replace("#cold_bold", "");
            }
        }
    }
}