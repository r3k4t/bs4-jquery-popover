$(function () {
    $(".btn-primary").click(function () {
        $("[data-toggle='popover']").popover('show');
    })

    $(".btn-warning").click(function () {
        $("[data-toggle='popover']").popover('hide');
    })

    $(".btn-success").click(function () {
        $("[data-toggle='popover']").popover('toggle');
    })
});
