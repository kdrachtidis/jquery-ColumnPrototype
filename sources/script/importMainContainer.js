function mainContainerJSON(data) {
    $("span.header-1").append(data.header);
    $("span.header-2").append(data.subheader);

    $(data.kpis).each(function () {
        var htmlItem;

        htmlItem = '<li>';
        htmlItem += '   <span class="kpi-amount">' + this.label + '</span>';
        htmlItem += '   <span class="kpi-title">' + this.value + '</span>';
        htmlItem += '</li>';
        $(htmlItem).appendTo(".objectheader div.kpi ol");
    });

    $(data.attributes).each(function () {
        $('<li>' + this.value + '</li>').appendTo(".objectheader div.attribute ol");
    });

    $(data.status).each(function () {
        $('<li>' + this.value + '</li>').appendTo(".objectheader div.status ol");
    });

    $(data.tabs).each(function () {
        $('<li><a href="#">' + this.label + '</a></li>').appendTo(".tabmenu ol");
    });

    $(data.forms[0].items).each(function () {
        var htmlItem;

        htmlItem = '<p class="form-entry">';
        htmlItem += '   <span class="label">' + this.label + '</span>';
        htmlItem += '   <span class="amount">' + this.amount + '</span>';
        htmlItem += '</p>';
        $(htmlItem).appendTo(".form-content");
    });
}

function getMainContainerData() {
    $.ajax({
        dataType: "json",
        url: "../../src/json/mainContainer.min.json",
        success: mainContainerJSON,
        error: function () {
            console.log('No main container JSON found.');
        },
        complete: function () {
            console.log('Main container JSON loaded.');
        }
    });
}