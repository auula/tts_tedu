var language = "java";
$(document).ready(function () {
    $("pre.line").snippet(language, { style: "acid", menu: false, box: "#eee", showNum: false });
    $("pre.code").snippet(language, { style: "acid", menu: false, box: "#eee" });
    $("pre.hide").snippet(language, { style: "acid", menu: false, box: "#eee", collapse: true, showMsg: "代码", hideMsg: "隐藏" });
});  