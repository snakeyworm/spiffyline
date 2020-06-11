$(function() {
    var NEDOC_MODULES = JSON.parse('[["Logger", "spiffyline.logging", true], ["Theme", "spiffyline.theme", true], ["VT100Error", "spiffyline.theme.exceptions", true], ["__init__", "spiffyline.logging.Logger", false], ["__init__", "spiffyline.theme.exceptions.VT100Error", false], ["__new__", "spiffyline.theme.Theme", false], ["bg_color", "spiffyline.theme.Theme", false], ["exceptions", "spiffyline.theme", true], ["fg_color", "spiffyline.theme.Theme", false], ["log", "spiffyline.logging.Logger", false], ["logging", "spiffyline", true], ["supported_formats", "spiffyline.theme.Theme", false], ["theme", "spiffyline", true]]');
    $("#search").autocomplete({
    source: NEDOC_MODULES.map(function(i) { return { label: i[0], desc: i[1], fulllink: i[2] }; }),
    select: function(event, ui) {
        if (ui.fulllink) {
            window.location.href = ui.item.desc + "." + ui.item.label + ".html";
        } else {
            window.location.href = ui.item.desc + ".html#" + ui.item.label;
        }
    },
    }).autocomplete("instance")._renderItem = function(ul, item) {
        return $("<li>")
            .append("<div><b>" + item.label + "</b><br>" + item.desc + "</div>")
            .appendTo(ul);
    };

    $(".fexpand").on("click", function(event) {
        event.preventDefault();
        var elem = $(this);
        var parent = elem.closest(".fn");
        parent.children(".fdetail").toggle(200);
    })

    if(window.location.hash) {
        var name = window.location.hash.slice(3); // remove #f_ prefix
        var elem = $("#fn_" + name);
        elem.toggle(0);
        elem.parent().parent().css("backgroundColor", "#e9f6ff");
    }
});
