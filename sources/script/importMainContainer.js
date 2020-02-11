function mainContainerJSON(data){
    $("span.header-1").append(data.header);
    $("span.header-2").append(data.subheader);

    $(data.kpis).each(function () {
        $('<li><span class="kpi-amount">' + this.label + '</span><span class="kpi-title">' + this.value + '</span></li>').appendTo("#objectheader div.kpi ol");
    });

    $(data.attributes).each(function () {
        $('<li>' + this.value + '</li>').appendTo("#objectheader div.attribute ol");
    });

    $(data.status).each(function () {
        $('<li>' + this.value + '</li>').appendTo("#objectheader div.status ol");
    });

    $(data.tabs).each(function () {
        $('<li><a href="#">' + this.label + '</a></li>').appendTo("#tabMenu ol");
    });
}

function simpleFormJSON(data){
    $(data.items).each(function () {
        $('<p class="form-entry"><span class="label">' + this.label + '</span><span class="amount">' + this.amount + '</span></p>').appendTo(".form-content");
    });
}