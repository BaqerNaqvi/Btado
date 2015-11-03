// Global Variable
var ist = {
    datePattern: "DD/MM/YY",
    shortDatePattern: "dd-M-yy",
    customShortDatePattern: "dd-mm-yy",
    customShortDateWithFullYearPattern: "dd-mm-yyyy",
    customLongDateWithFullYearPattern: "DD-MM-YYYY",
    timePattern: "HH:mm",
    hourPattern: "HH",
    minutePattern: "mm",
    dateTimePattern: "DD/MM/YY HH:mm",
    customDateTimePattern: "DD/MM/YYYY HH:mm",
    dateTimeWithSecondsPattern: "DD/MM/YY HH:mm:ss",
    // UTC Date Format
    utcFormat: "YYYY-MM-DDTHH:mm:ss",
    numberFormat: "0,0.00",
    ordinalFormat: "0",
    zeroDecimalNumberFormat: "0,0",
    //server exceptions enumeration 
    exceptionType: {
        CaresGeneralException: 'CaresGeneralException',
        UnspecifiedException: 'UnspecifiedException'
    },
    //verify if the string is a valid json
    verifyValidJSON: function (str) {
        try {
            JSON.parse(str);
        } catch (exception) {
            return false;
        }
        return true;
    },
    // Validate Url
    validateUrl: function (field) {
        var regex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
        return (regex.test(field)) ? true : false;
    },
    // Resource Text
    resourceText: {},
    // SiteUrl
    siteUrl: ""
};
// Common View Model - Editor (Save, Cancel - Reverts changes, Select Item)
ist.ViewModel = function (model) {

    //hold the currently selected item
    this.selectedItem = ko.observable();

    // hold the model
    this.model = model;

    //make edits to a copy
    this.itemForEditing = ko.observable();

};
