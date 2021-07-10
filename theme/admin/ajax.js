$(document).ready(function () {
    'use strict';
    category_detail();
    $("#neworder_category").change(function () {
        category_detail();
    });


    $("#neworder_services").change(function () {
        service_detail();
    });

    $(document).on('keyup', '#order_quantity', function () {
        var service = $("#neworder_services").val();
        var quantity = $("#neworder_quantity").val();
        var runs = $("#dripfeed-runs").val();
        if ($("#dripfeedcheckbox").prop('checked')) {
            var dripfeed = "var";
        } else {
            var dripfeed = "bos";
        }
        $.post('ajax_data', { action: 'service_price', service: service, quantity: quantity, dripfeed: dripfeed, runs: runs }, function (data) {
            $("#charge").val(data.price);
            $("#dripfeed-totalquantity").val(data.totalQuantity);
        }, 'json');
    });
    $(document).on('keyup', '#dripfeed-runs', function () {
        var service = $("#neworder_services").val();
        var quantity = $("#neworder_quantity").val();
        var runs = $("#dripfeed-runs").val();
        if ($("#dripfeedcheckbox").prop('checked')) {
            var dripfeed = "var";
        } else {
            var dripfeed = "bos";
        }
        $.post('ajax_data', { action: 'service_price', service: service, quantity: quantity, dripfeed: dripfeed, runs: runs }, function (data) {
            $("#charge").val(data.price);
            $("#dripfeed-totalquantity").val(data.totalQuantity);
        }, 'json');
    });
    $(document).on('keyup', '#neworder_comment', function () {
        comment_charge();
    });


    $(document).on('change', '#dripfeedcheckbox', function () {
        var dripfeed = $(this).prop('checked');
        if (dripfeed) {
            $("#dripfeed-options").removeClass();
            dripfeed_charge();
        } else {
            $("#dripfeed-options").addClass('hidden');
            dripfeed_charge();
        }
    });

});

function category_detail() {
    'use strict';
    var category_now = $("#neworder_category").val();
    $.post('ajax_data', { action: 'services_list', category: category_now }, function (data) {
        $("#neworder_services").html(data.services);
        service_detail();
    }, 'json');
}

function service_detail() {
    'use strict';
    var service_now = $("#neworder_services").val();
    $.post('ajax_data', { action: 'service_detail', service: service_now }, function (data) {
        if (data.empty == 1) {
            $("#charge_div").hide();
        } else {
            $("#charge_div").show();
            $("#neworder_fields").html(data.details);
            $("#charge").val(data.price);
        }
        $(".datetime").datepicker({
            format: "dd/mm/yyyy",
            language: "tr",
            startDate: new Date(),
        }).on('change', function (ev) {
            $(".datetime").datepicker('hide');
        });
        $("#clearExpiry").on('click', function() {
            $("#expiryDate").val('');
        });
        var dripfeed = $("#dripfeedcheckbox").prop('checked');
        if (dripfeed) {
            $("#dripfeed-options").removeClass();
        }
        comment_charge();
        if ($("#dripfeedcheckbox").prop('checked')) {
            dripfeed_charge();
        }
        if (data.sub) {
            $("#charge_div").hide();
        } else {
            $("#charge_div").show();
        }
    }, 'json');
}

function comment_charge() {
    'use strict';
    var service = $("#neworder_services").val();
    var comments = $("#neworder_comment").val();
    if (comments) {
        $.post('ajax_data', { action: 'service_price', service: service, comments: comments }, function (data) {
            $("#neworder_quantity").val(data.commentsCount);
            $("#charge").val(data.price);
        }, 'json');
    }
}

function dripfeed_charge() {
    'use strict';
    var service = $("#neworder_services").val();
    var quantity = $("#neworder_quantity").val();
    var runs = $("#dripfeed-runs").val();
    if ($("#dripfeedcheckbox").prop('checked')) {
        var dripfeed = "var";
    } else {
        var dripfeed = "bos";
    }
    $.post('ajax_data', { action: 'service_detail', service: service, quantity: quantity, dripfeed: dripfeed, runs: runs }, function (data) {
        $("#charge").val(data.price);
    }, 'json');
}
