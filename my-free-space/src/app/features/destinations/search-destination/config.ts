const breadcrumbConfig = {
  advertisers: {
    dropDownSettings: {
      clearAllText: "Clear All",
      clearable: false,
      closeOnSelect: false,
      loading: false,
      loadingText: "Loading Advertisers",
      maxSelectedItems: 10,
      multiple: true,
      notFoundText: "No Advertisers Found",
      placeholder: "Select Advertisers",
      searchable: true,
      virtualScroll: true
    },
    styles: {
      dropDown: {
        border: "1px solid #444444",
        "border-radius": "5px",
        "box-shadow": "0px 2px 10px rgba(0, 0, 0, 0.1)",
        "font-size": "12px",
        "font-family": "Helvetica",
        width: "170px",
        height: "30px"
      },
      selected: {
        color: "blue",
        "font-size": "14px",
        "font-family": "Helvetica"
      },
      unselected: {
        color: "red",
        "font-size": "12px",
        "font-family": "Helvetica"
      },
      unselectAllButton: {
        color: "black",
        "font-size": "12px",
        "font-family": "Helvetica"
      },
      arrow: {
        "border-color": "red transparent transparent",
        "border-width": "5px 5px 2.5px"
      }
    }
  },
  campaigns: {
    dropDownSettings: {
      clearAllText: "Clear All",
      clearable: false,
      closeOnSelect: false,
      loading: false,
      loadingText: "Loading Campaigns",
      multiple: true,
      notFoundText: "No Campaigns Found",
      placeholder: "Select Campaigns",
      searchable: true,
      virtualScroll: true
    },
    styles: {
      dropDown: {
        border: "1px solid #444444",
        "border-radius": "5px",
        "box-shadow": "0px 2px 10px rgba(0, 0, 0, 0.1)",
        "font-size": "12px",
        "font-family": "Helvetica",
        width: "170px",
        height: "30px"
      },
      selected: {
        color: "blue",
        "font-size": "14px",
        "font-family": "Helvetica"
      },
      unselected: {
        color: "gray",
        "font-size": "12px",
        "font-family": "Helvetica"
      },
      selectAllButton: {
        color: "black",
        "font-size": "12px",
        "font-family": "Helvetica"
      },
      unselectAllButton: {
        color: "black",
        "font-size": "12px",
        "font-family": "Helvetica"
      },
      arrow: {
        "border-color": "red transparent transparent",
        "border-width": "5px 5px 2.5px"
      }
    }
  },
  datePicker: {
    applyLabel: "Apply",
    cancelLabel: "Cancel",
    customRangeLabel: "Custom range",
    daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    direction: "ltr",
    endDate: "2021-10-27T06:59:59.999Z",
    firstDay: 0,
    format: "MM/DD/YYYY",
    isInlinePicker: false,
    maxDate: "2021-10-31T06:59:59.999Z",
    monthNames: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    separator: " - ",
    showCancel: true,
    showClearButton: false,
    showDropdowns: true,
    showWeekNumbers: false,
    startDate: "2021-09-26T07:00:00.000Z",
    stylesConfig: {
      calendar: {
        backgroundColor: "white",
        font: {
          color: "inherit",
          fontSize: "14px",
          fontWeight: "normal"
        },
        toolTip: {
          bottom: "59px",
          endDTLeft: "505px",
          startDTLeft: "260px"
        },
        topBar: {
          backgroundColor: "blue"
        }
      },
      inputBox: {
        border: "solid 1px black",
        borderRadius: "0px",
        fontWeight: "normal",
        height: "25px",
        marginLeft: "10.5%",
        paddingRight: "2px",
        textAlign: "right",
        width: "100px"
      }
    },
    weekLabel: "W"
  }
};

export { breadcrumbConfig };
