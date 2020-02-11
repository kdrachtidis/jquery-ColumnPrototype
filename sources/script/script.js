$(document).ready(function () {
    $.when(getStructure()).done(getData());
});