import {
  MaybeTransition,
  VBadge,
  VBtn,
  VCheckboxBtn,
  VChip,
  VDefaultsProvider,
  VDivider,
  VField,
  VIcon,
  VImg,
  VInput,
  VList,
  VListGroup,
  VListItem,
  VListItemAction,
  VMenu,
  VPicker,
  VPickerTitle,
  VProgressCircular,
  VSheet,
  filterFieldProps,
  makeCalendarProps,
  makeDimensionProps,
  makeFilterProps,
  makeFocusProps,
  makeSizeProps,
  makeTransitionProps,
  makeVBtnProps,
  makeVFieldProps,
  makeVInputProps,
  makeVListGroupProps,
  makeVListItemProps,
  makeVListProps,
  makeVMenuProps,
  makeVPickerProps,
  useBackgroundColor,
  useCalendar,
  useDimension,
  useFilter,
  useFocus,
  useLink,
  useListItems,
  useTextColor
} from "./chunk-PZRSDWNF.js";
import {
  IconValue,
  makeLayoutItemProps,
  makeThemeProps,
  provideTheme,
  useDate,
  useLayoutItem,
  useLocale,
  useProxiedModel,
  useResizeObserver,
  useToggleScope
} from "./chunk-SJGOZQ6O.js";
import "./chunk-RPSY5EB4.js";
import {
  chunkArray,
  convertToUnit,
  createRange,
  deepEqual,
  filterInputAttrs,
  genericComponent,
  getPropertyFromItem,
  getUid,
  makeComponentProps,
  omit,
  only,
  propsFactory,
  provideDefaults,
  useRender
} from "./chunk-Q464UZNM.js";
import {
  Fragment,
  computed,
  createTextVNode,
  createVNode,
  inject,
  mergeProps,
  nextTick,
  onMounted,
  provide,
  ref,
  shallowRef,
  toRaw,
  toRef,
  vModelText,
  vShow,
  watch,
  watchEffect,
  withDirectives
} from "./chunk-GU3YDFVY.js";

// node_modules/vuetify/lib/labs/VCalendar/VCalendar.mjs
import "C:/Users/qazwe/OneDrive/桌面/test/node_modules/vuetify/lib/labs/VCalendar/VCalendar.css";

// node_modules/vuetify/lib/labs/VCalendar/VCalendarDay.mjs
import "C:/Users/qazwe/OneDrive/桌面/test/node_modules/vuetify/lib/labs/VCalendar/VCalendarDay.css";

// node_modules/vuetify/lib/labs/VCalendar/VCalendarInterval.mjs
import "C:/Users/qazwe/OneDrive/桌面/test/node_modules/vuetify/lib/labs/VCalendar/VCalendarInterval.css";

// node_modules/vuetify/lib/labs/VCalendar/VCalendarIntervalEvent.mjs
import "C:/Users/qazwe/OneDrive/桌面/test/node_modules/vuetify/lib/labs/VCalendar/VCalendarIntervalEvent.css";
var makeVCalendarIntervalEventProps = propsFactory({
  allDay: Boolean,
  interval: Object,
  intervalDivisions: {
    type: Number,
    required: true
  },
  intervalDuration: {
    type: Number,
    required: true
  },
  intervalHeight: {
    type: Number,
    required: true
  },
  event: Object
}, "VCalendarIntervalEvent");
var VCalendarIntervalEvent = genericComponent()({
  name: "VCalendarIntervalEvent",
  props: makeVCalendarIntervalEventProps(),
  setup(props) {
    const adapter = useDate();
    const calcHeight = () => {
      var _a, _b, _c, _d;
      if (!((_a = props.event) == null ? void 0 : _a.first) && !((_b = props.event) == null ? void 0 : _b.last) || adapter.isEqual((_c = props.event) == null ? void 0 : _c.start, (_d = props.interval) == null ? void 0 : _d.start)) {
        return {
          height: "100%",
          margin: convertToUnit(0)
        };
      } else {
        const {
          height,
          margin
        } = Array.from({
          length: props.intervalDivisions
        }, (x) => x * (props.intervalDuration / props.intervalDivisions)).reduce((total, div, index) => {
          var _a2, _b2;
          if (adapter.isBefore(adapter.addMinutes((_a2 = props.interval) == null ? void 0 : _a2.start, div), (_b2 = props.event) == null ? void 0 : _b2.start)) {
            return {
              height: convertToUnit(props.intervalHeight / props.intervalDivisions * index),
              margin: convertToUnit(props.intervalHeight / props.intervalDivisions * index)
            };
          }
          return {
            height: total.height,
            margin: total.margin
          };
        }, {
          height: "",
          margin: ""
        });
        return {
          height,
          margin
        };
      }
    };
    useRender(() => {
      var _a, _b, _c, _d, _e;
      return createVNode(VSheet, {
        "height": calcHeight().height,
        "density": "comfortable",
        "style": `margin-top: ${calcHeight().margin}`,
        "class": "v-calendar-internal-event",
        "color": ((_a = props.event) == null ? void 0 : _a.color) ?? void 0,
        "rounded": ((_b = props.event) == null ? void 0 : _b.first) && ((_c = props.event) == null ? void 0 : _c.last) ? true : ((_d = props.event) == null ? void 0 : _d.first) ? "t" : ((_e = props.event) == null ? void 0 : _e.last) ? "b" : false
      }, {
        default: () => {
          var _a2, _b2;
          return [((_a2 = props.event) == null ? void 0 : _a2.first) ? (_b2 = props.event) == null ? void 0 : _b2.title : ""];
        }
      });
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VCalendar/VCalendarInterval.mjs
var makeVCalendarIntervalProps = propsFactory({
  day: {
    type: Object,
    default: () => ({})
  },
  dayIndex: Number,
  events: Array,
  intervalDivisions: {
    type: Number,
    default: 2
  },
  intervalDuration: {
    type: Number,
    default: 60
  },
  intervalHeight: {
    type: Number,
    default: 48
  },
  intervalFormat: {
    type: [String, Function],
    default: "fullTime12h"
  },
  intervalStart: {
    type: Number,
    default: 0
  }
}, "VCalendarInterval");
var VCalendarInterval = genericComponent()({
  name: "VCalendarInterval",
  props: {
    index: {
      type: Number,
      required: true
    },
    ...makeVCalendarIntervalProps()
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const adapter = useDate();
    const interval = computed(() => {
      const start = adapter.addMinutes(adapter.startOfDay(props.day.date), props.intervalDuration * (props.index + props.intervalStart));
      const end = adapter.addMinutes(adapter.startOfDay(props.day.date), props.intervalDuration * (props.index + props.intervalStart + 1) - 1);
      return {
        ...props.day,
        label: adapter.format(start, "fullTime24h"),
        start,
        end,
        events: props.events ? props.events.filter((e) => !e.allDay && (adapter.isEqual(start, e.start) || adapter.isWithinRange(e.start, [start, end]) || adapter.isWithinRange(start, [e.start, e.end]) || adapter.isEqual(end, e.end))).map((e) => {
          return {
            ...e,
            first: adapter.isEqual(start, e.start) || adapter.isWithinRange(e.start, [start, end]),
            last: adapter.isEqual(end, e.end) || adapter.isWithinRange(e.end, [start, end])
          };
        }) : []
      };
    });
    useRender(() => {
      var _a, _b;
      return props.dayIndex === 0 ? createVNode("div", {
        "class": "v-calendar-day__row-with-label",
        "style": `height: ${convertToUnit(props.intervalHeight)}`
      }, [createVNode("div", {
        "class": "v-calendar-day__row-label"
      }, [createVNode("slot", {
        "name": "intervalFormat",
        "interval": interval.value
      }, [props.index ? props.intervalFormat ? typeof props.intervalFormat === "string" ? adapter.format(interval.value.start, "hours12h") : props.intervalFormat(interval.value) : interval.value.label : ""])]), createVNode("div", {
        "class": "v-calendar-day__row-hairline"
      }, null), createVNode("div", {
        "class": ["v-calendar-day__row-content", interval.value.events.some((e) => !e.last) ? "v-calendar-day__row-content-through" : ""]
      }, [createVNode("slot", {
        "name": "intervalBody",
        "interval": interval.value
      }, [(_a = interval.value.events) == null ? void 0 : _a.map((event) => createVNode(VCalendarIntervalEvent, {
        "event": event,
        "interval": interval.value,
        "intervalDivisions": props.intervalDivisions,
        "intervalDuration": props.intervalDuration,
        "intervalHeight": props.intervalHeight
      }, null))])])]) : createVNode("div", {
        "class": "v-calendar-day__row-without-label",
        "style": `height: ${convertToUnit(props.intervalHeight)}`
      }, [createVNode("div", {
        "class": ["v-calendar-day__row-content", interval.value.events.some((e) => !e.last) ? "v-calendar-day__row-content-through" : ""]
      }, [createVNode("slot", {
        "name": "intervalBody",
        "interval": interval.value
      }, [(_b = interval.value.events) == null ? void 0 : _b.filter((event) => !event.allDay).map((event) => createVNode(VCalendarIntervalEvent, {
        "event": event,
        "interval": interval.value,
        "intervalDivisions": props.intervalDivisions,
        "intervalDuration": props.intervalDuration,
        "intervalHeight": props.intervalHeight
      }, null))])])]);
    });
    return {
      interval
    };
  }
});

// node_modules/vuetify/lib/labs/VCalendar/VCalendarDay.mjs
var makeVCalendarDayProps = propsFactory({
  hideDayHeader: Boolean,
  intervals: {
    type: Number,
    default: 24
  },
  ...makeVCalendarIntervalProps()
}, "VCalendarDay");
var VCalendarDay = genericComponent()({
  name: "VCalendarDay",
  props: makeVCalendarDayProps(),
  setup(props) {
    const adapter = useDate();
    const intervals = computed(() => [...Array.from({
      length: props.intervals
    }, (v, i) => i).filter((int2, index) => props.intervalDuration * (index + props.intervalStart) < 1440)]);
    useRender(() => {
      const calendarIntervalProps = VCalendarInterval.filterProps(props);
      return createVNode("div", {
        "class": "v-calendar-day__container"
      }, [!props.hideDayHeader && createVNode("div", {
        "key": "calender-week-name",
        "class": "v-calendar-weekly__head-weekday"
      }, [adapter.format(props.day.date, "weekdayShort"), createVNode("div", null, [createVNode(VBtn, {
        "icon": true,
        "text": adapter.format(props.day.date, "dayOfMonth"),
        "variant": "text"
      }, null)])]), intervals.value.map((_, index) => createVNode(VCalendarInterval, mergeProps({
        "index": index
      }, calendarIntervalProps), null))]);
    });
    return {
      intervals
    };
  }
});

// node_modules/vuetify/lib/labs/VCalendar/VCalendarHeader.mjs
import "C:/Users/qazwe/OneDrive/桌面/test/node_modules/vuetify/lib/labs/VCalendar/VCalendarHeader.css";
var makeVCalendarHeaderProps = propsFactory({
  nextIcon: {
    type: String,
    default: "$next"
  },
  prevIcon: {
    type: String,
    default: "$prev"
  },
  title: String,
  text: {
    type: String,
    default: "$vuetify.calendar.today"
  },
  viewMode: {
    type: String,
    default: "month"
  }
}, "VCalendarHeader");
var VCalendarHeader = genericComponent()({
  name: "VCalendarHeader",
  props: makeVCalendarHeaderProps(),
  emits: {
    "click:next": () => true,
    "click:prev": () => true,
    "click:toToday": () => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const {
      t
    } = useLocale();
    function prev() {
      emit("click:prev");
    }
    function next() {
      emit("click:next");
    }
    function toToday() {
      emit("click:toToday");
    }
    useRender(() => createVNode("div", {
      "class": "v-calendar-header"
    }, [props.text && createVNode(VBtn, {
      "key": "today",
      "class": "v-calendar-header__today",
      "text": t(props.text),
      "variant": "outlined",
      "onClick": toToday
    }, null), createVNode(VBtn, {
      "density": "comfortable",
      "icon": props.prevIcon,
      "variant": "text",
      "onClick": prev
    }, null), createVNode(VBtn, {
      "density": "comfortable",
      "icon": props.nextIcon,
      "variant": "text",
      "onClick": next
    }, null), createVNode("div", {
      "class": "v-calendar-header__title"
    }, [props.title])]));
    return {};
  }
});

// node_modules/vuetify/lib/labs/VCalendar/VCalendarMonthDay.mjs
import "C:/Users/qazwe/OneDrive/桌面/test/node_modules/vuetify/lib/labs/VCalendar/VCalendarMonthDay.css";

// node_modules/vuetify/lib/labs/VCalendar/VCalendarEvent.mjs
var makeVCalendarEventProps = propsFactory({
  allDay: Boolean,
  day: Object,
  event: Object
}, "VCalendarEvent");
var VCalendarEvent = genericComponent()({
  name: "VCalendarEvent",
  props: makeVCalendarEventProps(),
  setup(props) {
    useRender(() => createVNode(VChip, {
      "color": props.allDay ? "primary" : void 0,
      "density": "comfortable",
      "label": props.allDay,
      "width": "100%"
    }, {
      default: () => {
        var _a, _b;
        return [createVNode(VBadge, {
          "inline": true,
          "dot": true,
          "color": (_a = props.event) == null ? void 0 : _a.color
        }, null), (_b = props.event) == null ? void 0 : _b.title];
      }
    }));
    return {};
  }
});

// node_modules/vuetify/lib/labs/VCalendar/VCalendarMonthDay.mjs
var makeVCalendarMonthDayProps = propsFactory({
  active: Boolean,
  color: String,
  day: Object,
  disabled: Boolean,
  events: Array,
  title: [Number, String]
}, "VCalendarMonthDay");
var VCalendarMonthDay = genericComponent()({
  name: "VCalendarMonthDay",
  props: makeVCalendarMonthDayProps(),
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    useRender(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const hasTitle = !!(props.title || ((_a = slots.title) == null ? void 0 : _a.call(slots, {
        title: props.title
      })));
      return createVNode("div", {
        "class": ["v-calendar-month__day"]
      }, [!((_b = props.day) == null ? void 0 : _b.isHidden) && hasTitle && createVNode("div", {
        "key": "title",
        "class": "v-calendar-weekly__day-label"
      }, [((_c = slots.title) == null ? void 0 : _c.call(slots, {
        title: props.title
      })) ?? createVNode(VBtn, {
        "class": ((_d = props.day) == null ? void 0 : _d.isToday) ? "v-calendar-weekly__day-label__today" : void 0,
        "color": props.color,
        "disabled": props.disabled,
        "icon": true,
        "size": "x-small",
        "variant": ((_e = props.day) == null ? void 0 : _e.isToday) ? void 0 : "flat"
      }, {
        default: () => [props.title]
      })]), createVNode("div", {
        "key": "content",
        "class": "v-calendar-weekly__day-content"
      }, [((_f = slots.content) == null ? void 0 : _f.call(slots)) ?? createVNode("div", null, [createVNode("div", {
        "class": "v-calendar-weekly__day-alldayevents-container"
      }, [(_g = props.events) == null ? void 0 : _g.filter((event) => event.allDay).map((event) => createVNode(VCalendarEvent, {
        "day": props.day,
        "event": event,
        "allDay": true
      }, null))]), createVNode("div", {
        "class": "v-calendar-weekly__day-events-container"
      }, [(_h = props.events) == null ? void 0 : _h.filter((event) => !event.allDay).map((event) => createVNode(VCalendarEvent, {
        "day": props.day,
        "event": event
      }, null))])])]), (_i = slots.default) == null ? void 0 : _i.call(slots)]);
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VCalendar/VCalendar.mjs
var makeVCalendarProps = propsFactory({
  hideHeader: Boolean,
  hideWeekNumber: Boolean,
  ...makeCalendarProps(),
  ...makeVCalendarDayProps(),
  ...makeVCalendarHeaderProps()
}, "VCalender");
var VCalendar = genericComponent()({
  name: "VCalendar",
  props: makeVCalendarProps(),
  emits: {
    next: null,
    prev: null,
    "update:modelValue": null
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const adapter = useDate();
    const {
      daysInMonth,
      daysInWeek,
      genDays,
      model,
      weekNumbers
    } = useCalendar(props);
    const dayNames = adapter.getWeekdays();
    function onClickNext() {
      if (props.viewMode === "month") {
        model.value = [adapter.addMonths(model.value[0], 1)];
      }
      if (props.viewMode === "week") {
        model.value = [adapter.addDays(model.value[0], 7)];
      }
      if (props.viewMode === "day") {
        model.value = [adapter.addDays(model.value[0], 1)];
      }
    }
    function onClickPrev() {
      if (props.viewMode === "month") {
        model.value = [adapter.addMonths(model.value[0], -1)];
      }
      if (props.viewMode === "week") {
        model.value = [adapter.addDays(model.value[0], -7)];
      }
      if (props.viewMode === "day") {
        model.value = [adapter.addDays(model.value[0], -1)];
      }
    }
    function onClickToday() {
      model.value = [/* @__PURE__ */ new Date()];
    }
    const title = computed(() => {
      return adapter.format(model.value[0], "monthAndYear");
    });
    useRender(() => {
      var _a;
      const calendarDayProps = VCalendarDay.filterProps(props);
      const calendarHeaderProps = VCalendarHeader.filterProps(props);
      return createVNode("div", {
        "class": ["v-calendar", {
          "v-calendar-monthly": props.viewMode === "month",
          "v-calendar-weekly": props.viewMode === "week",
          "v-calendar-day": props.viewMode === "day"
        }]
      }, [createVNode("div", null, [!props.hideHeader && (!slots.header ? createVNode(VCalendarHeader, mergeProps({
        "key": "calendar-header"
      }, calendarHeaderProps, {
        "title": title.value,
        "onClick:next": onClickNext,
        "onClick:prev": onClickPrev,
        "onClick:toToday": onClickToday
      }), null) : slots.header({
        title: title.value
      }))]), createVNode("div", {
        "class": ["v-calendar__container", `days__${props.weekdays.length}`]
      }, [props.viewMode === "month" && !props.hideDayHeader && createVNode("div", {
        "class": ["v-calendar-weekly__head", `days__${props.weekdays.length}`, ...!props.hideWeekNumber ? ["v-calendar-weekly__head-weeknumbers"] : []],
        "key": "calenderWeeklyHead"
      }, [!props.hideWeekNumber ? createVNode("div", {
        "key": "weekNumber0",
        "class": "v-calendar-weekly__head-weeknumber"
      }, null) : "", props.weekdays.map((weekday) => createVNode("div", {
        "class": `v-calendar-weekly__head-weekday${!props.hideWeekNumber ? "-with-weeknumber" : ""}`
      }, [dayNames[weekday]]))]), props.viewMode === "month" && createVNode("div", {
        "key": "VCalendarMonth",
        "class": ["v-calendar-month__days", `days${!props.hideWeekNumber ? "-with-weeknumbers" : ""}__${props.weekdays.length}`, ...!props.hideWeekNumber ? ["v-calendar-month__weeknumbers"] : []]
      }, [chunkArray(daysInMonth.value, props.weekdays.length).map((week, wi) => [!props.hideWeekNumber ? createVNode("div", {
        "class": "v-calendar-month__weeknumber"
      }, [weekNumbers.value[wi]]) : "", week.map((day) => {
        var _a2;
        return createVNode(VCalendarMonthDay, {
          "color": adapter.isSameDay(/* @__PURE__ */ new Date(), day.date) ? "primary" : void 0,
          "day": day,
          "title": day ? adapter.format(day.date, "dayOfMonth") : "NaN",
          "events": (_a2 = props.events) == null ? void 0 : _a2.filter((e) => adapter.isSameDay(day.date, e.start) || adapter.isSameDay(day.date, e.end))
        }, null);
      })])]), props.viewMode === "week" && daysInWeek.value.map((day, i) => {
        var _a2;
        return createVNode(VCalendarDay, mergeProps(calendarDayProps, {
          "day": day,
          "dayIndex": i,
          "events": (_a2 = props.events) == null ? void 0 : _a2.filter((e) => adapter.isSameDay(e.start, day.date) || adapter.isSameDay(e.end, day.date))
        }), null);
      }), props.viewMode === "day" && createVNode(VCalendarDay, mergeProps(calendarDayProps, {
        "day": genDays([model.value[0]], adapter.date())[0],
        "events": (_a = props.events) == null ? void 0 : _a.filter((e) => adapter.isSameDay(e.start, genDays([model.value[0]], adapter.date())[0].date) || adapter.isSameDay(e.end, genDays([model.value[0]], adapter.date())[0].date))
      }), null)])]);
    });
    return {
      daysInMonth,
      daysInWeek,
      genDays
    };
  }
});

// node_modules/vuetify/lib/labs/VConfirmEdit/VConfirmEdit.mjs
var makeVConfirmEditProps = propsFactory({
  modelValue: null,
  color: String,
  cancelText: {
    type: String,
    default: "$vuetify.confirmEdit.cancel"
  },
  okText: {
    type: String,
    default: "$vuetify.confirmEdit.ok"
  }
}, "VConfirmEdit");
var VConfirmEdit = genericComponent()({
  name: "VConfirmEdit",
  props: makeVConfirmEditProps(),
  emits: {
    cancel: () => true,
    save: (value) => true,
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const internalModel = ref();
    watchEffect(() => {
      internalModel.value = structuredClone(toRaw(model.value));
    });
    const {
      t
    } = useLocale();
    const isPristine = computed(() => {
      return deepEqual(model.value, internalModel.value);
    });
    function save() {
      model.value = internalModel.value;
      emit("save", internalModel.value);
    }
    function cancel() {
      internalModel.value = structuredClone(toRaw(model.value));
      emit("cancel");
    }
    let actionsUsed = false;
    useRender(() => {
      var _a;
      const actions = createVNode(Fragment, null, [createVNode(VBtn, {
        "disabled": isPristine.value,
        "variant": "text",
        "color": props.color,
        "onClick": cancel,
        "text": t(props.cancelText)
      }, null), createVNode(VBtn, {
        "disabled": isPristine.value,
        "variant": "text",
        "color": props.color,
        "onClick": save,
        "text": t(props.okText)
      }, null)]);
      return createVNode(Fragment, null, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
        model: internalModel,
        get actions() {
          actionsUsed = true;
          return actions;
        }
      }), !actionsUsed && actions]);
    });
  }
});

// node_modules/vuetify/lib/labs/VEmptyState/VEmptyState.mjs
import "C:/Users/qazwe/OneDrive/桌面/test/node_modules/vuetify/lib/labs/VEmptyState/VEmptyState.css";
var makeVEmptyStateProps = propsFactory({
  actionText: String,
  bgColor: String,
  color: String,
  icon: IconValue,
  image: String,
  justify: {
    type: String,
    default: "center"
  },
  headline: String,
  title: String,
  text: String,
  textWidth: {
    type: [Number, String],
    default: 500
  },
  href: String,
  to: String,
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeSizeProps({
    size: void 0
  }),
  ...makeThemeProps()
}, "VEmptyState");
var VEmptyState = genericComponent()({
  name: "VEmptyState",
  props: makeVEmptyStateProps(),
  emits: {
    "click:action": (e) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      dimensionStyles
    } = useDimension(props);
    function onClickAction(e) {
      emit("click:action", e);
    }
    useRender(() => {
      var _a, _b, _c;
      const hasActions = !!(slots.actions || props.actionText);
      const hasHeadline = !!(slots.headline || props.headline);
      const hasTitle = !!(slots.title || props.title);
      const hasText = !!(slots.text || props.text);
      const hasMedia = !!(slots.media || props.image || props.icon);
      const size = props.size || (props.image ? 200 : 96);
      return createVNode("div", {
        "class": ["v-empty-state", {
          [`v-empty-state--${props.justify}`]: true
        }, themeClasses.value, backgroundColorClasses.value, props.class],
        "style": [backgroundColorStyles.value, dimensionStyles.value, props.style]
      }, [hasMedia && createVNode("div", {
        "key": "media",
        "class": "v-empty-state__media"
      }, [!slots.media ? createVNode(Fragment, null, [props.image ? createVNode(VImg, {
        "key": "image",
        "src": props.image,
        "height": size
      }, null) : props.icon ? createVNode(VIcon, {
        "key": "icon",
        "size": size,
        "icon": props.icon
      }, null) : void 0]) : createVNode(VDefaultsProvider, {
        "key": "media-defaults",
        "defaults": {
          VImg: {
            src: props.image,
            height: size
          },
          VIcon: {
            size,
            icon: props.icon
          }
        }
      }, {
        default: () => [slots.media()]
      })]), hasHeadline && createVNode("div", {
        "key": "headline",
        "class": "v-empty-state__headline"
      }, [((_a = slots.headline) == null ? void 0 : _a.call(slots)) ?? props.headline]), hasTitle && createVNode("div", {
        "key": "title",
        "class": "v-empty-state__title"
      }, [((_b = slots.title) == null ? void 0 : _b.call(slots)) ?? props.title]), hasText && createVNode("div", {
        "key": "text",
        "class": "v-empty-state__text",
        "style": {
          maxWidth: convertToUnit(props.textWidth)
        }
      }, [((_c = slots.text) == null ? void 0 : _c.call(slots)) ?? props.text]), slots.default && createVNode("div", {
        "key": "content",
        "class": "v-empty-state__content"
      }, [slots.default()]), hasActions && createVNode("div", {
        "key": "actions",
        "class": "v-empty-state__actions"
      }, [createVNode(VDefaultsProvider, {
        "defaults": {
          VBtn: {
            class: "v-empty-state__action-btn",
            color: props.color,
            text: props.actionText
          }
        }
      }, {
        default: () => {
          var _a2;
          return [((_a2 = slots.actions) == null ? void 0 : _a2.call(slots, {
            props: {
              onClick: onClickAction
            }
          })) ?? createVNode(VBtn, {
            "onClick": onClickAction
          }, null)];
        }
      })])]);
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VFab/VFab.mjs
import "C:/Users/qazwe/OneDrive/桌面/test/node_modules/vuetify/lib/labs/VFab/VFab.css";
var makeVFabProps = propsFactory({
  app: Boolean,
  appear: Boolean,
  extended: Boolean,
  location: {
    type: String,
    default: "bottom end"
  },
  offset: Boolean,
  modelValue: {
    type: Boolean,
    default: true
  },
  ...omit(makeVBtnProps({
    active: true
  }), ["location"]),
  ...makeLayoutItemProps(),
  ...makeTransitionProps({
    transition: "fab-transition"
  })
}, "VFab");
var VFab = genericComponent()({
  name: "VFab",
  props: makeVFabProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const height = shallowRef(56);
    const layoutItemStyles = ref();
    const {
      resizeRef
    } = useResizeObserver((entries) => {
      if (!entries.length)
        return;
      height.value = entries[0].target.clientHeight;
    });
    const hasPosition = computed(() => props.app || props.absolute);
    const position = computed(() => {
      if (!hasPosition.value)
        return false;
      return props.location.split(" ").shift();
    });
    const orientation = computed(() => {
      if (!hasPosition.value)
        return false;
      return props.location.split(" ")[1] ?? "end";
    });
    useToggleScope(() => props.app, () => {
      const layout = useLayoutItem({
        id: props.name,
        order: computed(() => parseInt(props.order, 10)),
        position,
        layoutSize: height,
        elementSize: computed(() => height.value + 32),
        active: computed(() => props.app && model.value),
        absolute: toRef(props, "absolute")
      });
      watchEffect(() => {
        layoutItemStyles.value = layout.layoutItemStyles.value;
      });
    });
    const vFabRef = ref();
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return createVNode("div", {
        "ref": vFabRef,
        "class": ["v-fab", {
          "v-fab--absolute": props.absolute,
          "v-fab--app": !!props.app,
          "v-fab--extended": props.extended,
          "v-fab--offset": props.offset,
          [`v-fab--${position.value}`]: hasPosition.value,
          [`v-fab--${orientation.value}`]: hasPosition.value
        }, props.class],
        "style": [props.app ? {
          ...layoutItemStyles.value
        } : {
          height: "inherit",
          width: void 0
        }, props.style]
      }, [createVNode("div", {
        "class": "v-fab__container"
      }, [createVNode(MaybeTransition, {
        "appear": props.appear,
        "transition": props.transition
      }, {
        default: () => [withDirectives(createVNode(VBtn, mergeProps({
          "ref": resizeRef
        }, btnProps, {
          "active": void 0,
          "location": void 0
        }), slots), [[vShow, props.active]])]
      })])]);
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VNumberInput/VNumberInput.mjs
import "C:/Users/qazwe/OneDrive/桌面/test/node_modules/vuetify/lib/labs/VNumberInput/VNumberInput.css";
var makeVNumberInputProps = propsFactory({
  controlVariant: {
    type: String,
    default: "default"
  },
  inset: Boolean,
  hideInput: Boolean,
  min: Number,
  max: Number,
  step: Number,
  ...only(makeVInputProps(), ["density", "disabled", "focused", "hideDetails", "hint", "label", "persistentHint", "readonly"]),
  ...only(makeVFieldProps(), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "reverse", "rounded", "style", "theme", "variant"]),
  ...makeFocusProps()
}, "VNumberInput");
var VNumberInput = genericComponent()({
  name: "VNumberInput",
  inheritAttrs: false,
  props: {
    ...makeVNumberInputProps(),
    modelValue: {
      type: [Number, String],
      default: 0
    }
  },
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const inputRef = ref();
    function onFocus() {
      if (!isFocused.value)
        focus();
    }
    const controlVariant = computed(() => {
      return props.hideInput ? "stacked" : props.controlVariant;
    });
    function toggleUpDown() {
      var _a, _b;
      let increment = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      if (increment) {
        (_a = inputRef.value) == null ? void 0 : _a.stepUp();
      } else {
        (_b = inputRef.value) == null ? void 0 : _b.stepDown();
      }
      if (inputRef.value)
        model.value = parseInt(inputRef.value.value, 10);
    }
    function onClickUp() {
      toggleUpDown();
    }
    function onClickDown() {
      toggleUpDown(false);
    }
    const incrementSlotProps = computed(() => ({
      click: onClickUp
    }));
    const decrementSlotProps = computed(() => ({
      click: onClickDown
    }));
    useRender(() => {
      const fieldProps = filterFieldProps(props);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      function controlNode() {
        const defaultHeight = controlVariant.value === "stacked" ? "auto" : "100%";
        return createVNode("div", {
          "class": "v-number-input__control"
        }, [!slots.decrement ? createVNode(VBtn, {
          "flat": true,
          "key": "decrement-btn",
          "height": defaultHeight,
          "icon": "$expand",
          "rounded": "0",
          "size": "small",
          "onClick": onClickDown
        }, null) : createVNode(VDefaultsProvider, {
          "key": "decrement-defaults",
          "defaults": {
            VBtn: {
              flat: true,
              rounded: "0",
              height: defaultHeight,
              size: "small",
              icon: "$expand"
            }
          }
        }, {
          default: () => [slots.decrement(decrementSlotProps.value)]
        }), createVNode(VDivider, {
          "vertical": controlVariant.value !== "stacked"
        }, null), !slots.increment ? createVNode(VBtn, {
          "flat": true,
          "key": "increment-btn",
          "height": defaultHeight,
          "icon": "$collapse",
          "onClick": onClickUp,
          "rounded": "0",
          "size": "small"
        }, null) : createVNode(VDefaultsProvider, {
          "key": "increment-defaults",
          "defaults": {
            VBtn: {
              flat: true,
              height: defaultHeight,
              rounded: "0",
              size: "small",
              icon: "$collapse"
            }
          }
        }, {
          default: () => [slots.increment(incrementSlotProps.value)]
        })]);
      }
      function dividerNode() {
        return !props.hideInput && !props.inset ? createVNode(VDivider, {
          "vertical": true
        }, null) : void 0;
      }
      return createVNode(VInput, mergeProps({
        "class": ["v-number-input", {
          "v-number-input--default": controlVariant.value === "default",
          "v-number-input--hide-input": props.hideInput,
          "v-number-input--inset": props.inset,
          "v-number-input--reverse": props.reverse,
          "v-number-input--split": controlVariant.value === "split",
          "v-number-input--stacked": controlVariant.value === "stacked"
        }, props.class]
      }, rootAttrs, inputProps, {
        "focused": isFocused.value,
        "style": props.style
      }), {
        ...slots,
        default: () => createVNode(VField, mergeProps(fieldProps, {
          "active": true,
          "focused": isFocused.value
        }), {
          ...slots,
          default: (_ref2) => {
            let {
              props: {
                class: fieldClass,
                ...slotProps
              }
            } = _ref2;
            return withDirectives(createVNode("input", mergeProps({
              "ref": inputRef,
              "type": "number",
              "onUpdate:modelValue": ($event) => model.value = $event,
              "class": fieldClass,
              "max": props.max,
              "min": props.min,
              "step": props.step,
              "onFocus": onFocus,
              "onBlur": blur
            }, inputAttrs), null), [[vModelText, model.value]]);
          },
          "append-inner": controlVariant.value === "split" ? () => createVNode("div", {
            "class": "v-number-input__control"
          }, [createVNode(VDivider, {
            "vertical": true
          }, null), createVNode(VBtn, {
            "flat": true,
            "height": "100%",
            "icon": "$plus",
            "tile": true,
            "onClick": onClickUp
          }, null)]) : !props.reverse ? () => createVNode(Fragment, null, [dividerNode(), controlNode()]) : void 0,
          "prepend-inner": controlVariant.value === "split" ? () => createVNode("div", {
            "class": "v-number-input__control"
          }, [createVNode(VBtn, {
            "flat": true,
            "height": "100%",
            "icon": "$minus",
            "tile": true,
            "onClick": onClickDown
          }, null), createVNode(VDivider, {
            "vertical": true
          }, null)]) : props.reverse ? () => createVNode(Fragment, null, [controlNode(), dividerNode()]) : void 0
        })
      });
    });
  }
});

// node_modules/vuetify/lib/labs/VSparkline/util/line.mjs
var makeLineProps = propsFactory({
  autoDraw: Boolean,
  autoDrawDuration: [Number, String],
  autoDrawEasing: {
    type: String,
    default: "ease"
  },
  color: String,
  gradient: {
    type: Array,
    default: () => []
  },
  gradientDirection: {
    type: String,
    validator: (val) => ["top", "bottom", "left", "right"].includes(val),
    default: "top"
  },
  height: {
    type: [String, Number],
    default: 75
  },
  labels: {
    type: Array,
    default: () => []
  },
  labelSize: {
    type: [Number, String],
    default: 7
  },
  lineWidth: {
    type: [String, Number],
    default: 4
  },
  id: String,
  itemValue: {
    type: String,
    default: "value"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  min: [String, Number],
  max: [String, Number],
  padding: {
    type: [String, Number],
    default: 8
  },
  showLabels: Boolean,
  smooth: Boolean,
  width: {
    type: [Number, String],
    default: 300
  }
}, "Line");

// node_modules/vuetify/lib/labs/VSparkline/VBarline.mjs
var makeVBarlineProps = propsFactory({
  autoLineWidth: Boolean,
  ...makeLineProps()
}, "VBarline");
var VBarline = genericComponent()({
  name: "VBarline",
  props: makeVBarlineProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const uid = getUid();
    const id = computed(() => props.id || `barline-${uid}`);
    const autoDrawDuration = computed(() => Number(props.autoDrawDuration) || 500);
    const hasLabels = computed(() => {
      return Boolean(props.showLabels || props.labels.length > 0 || !!(slots == null ? void 0 : slots.label));
    });
    const lineWidth = computed(() => parseFloat(props.lineWidth) || 4);
    const totalWidth = computed(() => Math.max(props.modelValue.length * lineWidth.value, Number(props.width)));
    const boundary = computed(() => {
      return {
        minX: 0,
        maxX: totalWidth.value,
        minY: 0,
        maxY: parseInt(props.height, 10)
      };
    });
    const items = computed(() => props.modelValue.map((item) => getPropertyFromItem(item, props.itemValue, item)));
    function genBars(values, boundary2) {
      const {
        minX,
        maxX,
        minY,
        maxY
      } = boundary2;
      const totalValues = values.length;
      let maxValue = props.max != null ? Number(props.max) : Math.max(...values);
      let minValue = props.min != null ? Number(props.min) : Math.min(...values);
      if (minValue > 0 && props.min == null)
        minValue = 0;
      if (maxValue < 0 && props.max == null)
        maxValue = 0;
      const gridX = maxX / totalValues;
      const gridY = (maxY - minY) / (maxValue - minValue || 1);
      const horizonY = maxY - Math.abs(minValue * gridY);
      return values.map((value, index) => {
        const height = Math.abs(gridY * value);
        return {
          x: minX + index * gridX,
          y: horizonY - height + +(value < 0) * height,
          height,
          value
        };
      });
    }
    const parsedLabels = computed(() => {
      const labels = [];
      const points = genBars(items.value, boundary.value);
      const len = points.length;
      for (let i = 0; labels.length < len; i++) {
        const item = points[i];
        let value = props.labels[i];
        if (!value) {
          value = typeof item === "object" ? item.value : item;
        }
        labels.push({
          x: item.x,
          value: String(value)
        });
      }
      return labels;
    });
    const bars = computed(() => genBars(items.value, boundary.value));
    const offsetX = computed(() => (Math.abs(bars.value[0].x - bars.value[1].x) - lineWidth.value) / 2);
    useRender(() => {
      const gradientData = !props.gradient.slice().length ? [""] : props.gradient.slice().reverse();
      return createVNode("svg", {
        "display": "block"
      }, [createVNode("defs", null, [createVNode("linearGradient", {
        "id": id.value,
        "gradientUnits": "userSpaceOnUse",
        "x1": props.gradientDirection === "left" ? "100%" : "0",
        "y1": props.gradientDirection === "top" ? "100%" : "0",
        "x2": props.gradientDirection === "right" ? "100%" : "0",
        "y2": props.gradientDirection === "bottom" ? "100%" : "0"
      }, [gradientData.map((color, index) => createVNode("stop", {
        "offset": index / Math.max(gradientData.length - 1, 1),
        "stop-color": color || "currentColor"
      }, null))])]), createVNode("clipPath", {
        "id": `${id.value}-clip`
      }, [bars.value.map((item) => createVNode("rect", {
        "x": item.x + offsetX.value,
        "y": item.y,
        "width": lineWidth.value,
        "height": item.height,
        "rx": typeof props.smooth === "number" ? props.smooth : props.smooth ? 2 : 0,
        "ry": typeof props.smooth === "number" ? props.smooth : props.smooth ? 2 : 0
      }, [props.autoDraw && createVNode(Fragment, null, [createVNode("animate", {
        "attributeName": "y",
        "from": item.y + item.height,
        "to": item.y,
        "dur": `${autoDrawDuration.value}ms`,
        "fill": "freeze"
      }, null), createVNode("animate", {
        "attributeName": "height",
        "from": "0",
        "to": item.height,
        "dur": `${autoDrawDuration.value}ms`,
        "fill": "freeze"
      }, null)])]))]), hasLabels.value && createVNode("g", {
        "key": "labels",
        "style": {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [parsedLabels.value.map((item, i) => {
        var _a;
        return createVNode("text", {
          "x": item.x + offsetX.value + lineWidth.value / 2,
          "y": parseInt(props.height, 10) - 2 + (parseInt(props.labelSize, 10) || 7 * 0.75),
          "font-size": Number(props.labelSize) || 7
        }, [((_a = slots.label) == null ? void 0 : _a.call(slots, {
          index: i,
          value: item.value
        })) ?? item.value]);
      })]), createVNode("g", {
        "clip-path": `url(#${id.value}-clip)`,
        "fill": `url(#${id.value})`
      }, [createVNode("rect", {
        "x": 0,
        "y": 0,
        "width": Math.max(props.modelValue.length * lineWidth.value, Number(props.width)),
        "height": props.height
      }, null)])]);
    });
  }
});

// node_modules/vuetify/lib/labs/VSparkline/util/path.mjs
function genPath(points, radius) {
  let fill = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  let height = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (points.length === 0)
    return "";
  const start = points.shift();
  const end = points[points.length - 1];
  return (fill ? `M${start.x} ${height - start.x + 2} L${start.x} ${start.y}` : `M${start.x} ${start.y}`) + points.map((point, index) => {
    const next = points[index + 1];
    const prev = points[index - 1] || start;
    const isCollinear = next && checkCollinear(next, point, prev);
    if (!next || isCollinear) {
      return `L${point.x} ${point.y}`;
    }
    const threshold = Math.min(getDistance(prev, point), getDistance(next, point));
    const isTooCloseForRadius = threshold / 2 < radius;
    const radiusForPoint = isTooCloseForRadius ? threshold / 2 : radius;
    const before = moveTo(prev, point, radiusForPoint);
    const after = moveTo(next, point, radiusForPoint);
    return `L${before.x} ${before.y}S${point.x} ${point.y} ${after.x} ${after.y}`;
  }).join("") + (fill ? `L${end.x} ${height - start.x + 2} Z` : "");
}
function int(value) {
  return parseInt(value, 10);
}
function checkCollinear(p0, p1, p2) {
  return int(p0.x + p2.x) === int(2 * p1.x) && int(p0.y + p2.y) === int(2 * p1.y);
}
function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function moveTo(to, from, radius) {
  const vector = {
    x: to.x - from.x,
    y: to.y - from.y
  };
  const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  const unitVector = {
    x: vector.x / length,
    y: vector.y / length
  };
  return {
    x: from.x + unitVector.x * radius,
    y: from.y + unitVector.y * radius
  };
}

// node_modules/vuetify/lib/labs/VSparkline/VTrendline.mjs
var makeVTrendlineProps = propsFactory({
  fill: Boolean,
  ...makeLineProps()
}, "VTrendline");
var VTrendline = genericComponent()({
  name: "VTrendline",
  props: makeVTrendlineProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const uid = getUid();
    const id = computed(() => props.id || `trendline-${uid}`);
    const autoDrawDuration = computed(() => Number(props.autoDrawDuration) || (props.fill ? 500 : 2e3));
    const lastLength = ref(0);
    const path = ref(null);
    function genPoints(values, boundary2) {
      const {
        minX,
        maxX,
        minY,
        maxY
      } = boundary2;
      const totalValues = values.length;
      const maxValue = props.max != null ? Number(props.max) : Math.max(...values);
      const minValue = props.min != null ? Number(props.min) : Math.min(...values);
      const gridX = (maxX - minX) / (totalValues - 1);
      const gridY = (maxY - minY) / (maxValue - minValue || 1);
      return values.map((value, index) => {
        return {
          x: minX + index * gridX,
          y: maxY - (value - minValue) * gridY,
          value
        };
      });
    }
    const hasLabels = computed(() => {
      return Boolean(props.showLabels || props.labels.length > 0 || !!(slots == null ? void 0 : slots.label));
    });
    const lineWidth = computed(() => {
      return parseFloat(props.lineWidth) || 4;
    });
    const totalWidth = computed(() => Number(props.width));
    const boundary = computed(() => {
      const padding = Number(props.padding);
      return {
        minX: padding,
        maxX: totalWidth.value - padding,
        minY: padding,
        maxY: parseInt(props.height, 10) - padding
      };
    });
    const items = computed(() => props.modelValue.map((item) => getPropertyFromItem(item, props.itemValue, item)));
    const parsedLabels = computed(() => {
      const labels = [];
      const points = genPoints(items.value, boundary.value);
      const len = points.length;
      for (let i = 0; labels.length < len; i++) {
        const item = points[i];
        let value = props.labels[i];
        if (!value) {
          value = typeof item === "object" ? item.value : item;
        }
        labels.push({
          x: item.x,
          value: String(value)
        });
      }
      return labels;
    });
    watch(() => props.modelValue, async () => {
      await nextTick();
      if (!props.autoDraw || !path.value)
        return;
      const pathRef = path.value;
      const length = pathRef.getTotalLength();
      if (!props.fill) {
        pathRef.style.strokeDasharray = `${length}`;
        pathRef.style.strokeDashoffset = `${length}`;
        pathRef.getBoundingClientRect();
        pathRef.style.transition = `stroke-dashoffset ${autoDrawDuration.value}ms ${props.autoDrawEasing}`;
        pathRef.style.strokeDashoffset = "0";
      } else {
        pathRef.style.transformOrigin = "bottom center";
        pathRef.style.transition = "none";
        pathRef.style.transform = `scaleY(0)`;
        pathRef.getBoundingClientRect();
        pathRef.style.transition = `transform ${autoDrawDuration.value}ms ${props.autoDrawEasing}`;
        pathRef.style.transform = `scaleY(1)`;
      }
      lastLength.value = length;
    }, {
      immediate: true
    });
    function genPath2(fill) {
      return genPath(genPoints(items.value, boundary.value), props.smooth ? 8 : Number(props.smooth), fill, parseInt(props.height, 10));
    }
    useRender(() => {
      var _a;
      const gradientData = !props.gradient.slice().length ? [""] : props.gradient.slice().reverse();
      return createVNode("svg", {
        "display": "block",
        "stroke-width": parseFloat(props.lineWidth) ?? 4
      }, [createVNode("defs", null, [createVNode("linearGradient", {
        "id": id.value,
        "gradientUnits": "userSpaceOnUse",
        "x1": props.gradientDirection === "left" ? "100%" : "0",
        "y1": props.gradientDirection === "top" ? "100%" : "0",
        "x2": props.gradientDirection === "right" ? "100%" : "0",
        "y2": props.gradientDirection === "bottom" ? "100%" : "0"
      }, [gradientData.map((color, index) => createVNode("stop", {
        "offset": index / Math.max(gradientData.length - 1, 1),
        "stop-color": color || "currentColor"
      }, null))])]), hasLabels.value && createVNode("g", {
        "key": "labels",
        "style": {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [parsedLabels.value.map((item, i) => {
        var _a2;
        return createVNode("text", {
          "x": item.x + lineWidth.value / 2 + lineWidth.value / 2,
          "y": parseInt(props.height, 10) - 4 + (parseInt(props.labelSize, 10) || 7 * 0.75),
          "font-size": Number(props.labelSize) || 7
        }, [((_a2 = slots.label) == null ? void 0 : _a2.call(slots, {
          index: i,
          value: item.value
        })) ?? item.value]);
      })]), createVNode("path", {
        "ref": path,
        "d": genPath2(props.fill),
        "fill": props.fill ? `url(#${id.value})` : "none",
        "stroke": props.fill ? "none" : `url(#${id.value})`
      }, null), props.fill && createVNode("path", {
        "d": genPath2(false),
        "fill": "none",
        "stroke": props.color ?? ((_a = props.gradient) == null ? void 0 : _a[0])
      }, null)]);
    });
  }
});

// node_modules/vuetify/lib/labs/VSparkline/VSparkline.mjs
var makeVSparklineProps = propsFactory({
  type: {
    type: String,
    default: "trend"
  },
  ...makeVBarlineProps(),
  ...makeVTrendlineProps()
}, "VSparkline");
var VSparkline = genericComponent()({
  name: "VSparkline",
  props: makeVSparklineProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    const hasLabels = computed(() => {
      return Boolean(props.showLabels || props.labels.length > 0 || !!(slots == null ? void 0 : slots.label));
    });
    const totalHeight = computed(() => {
      let height = parseInt(props.height, 10);
      if (hasLabels.value)
        height += parseInt(props.labelSize, 10) * 1.5;
      return height;
    });
    useRender(() => {
      const Tag = props.type === "trend" ? VTrendline : VBarline;
      const lineProps = props.type === "trend" ? VTrendline.filterProps(props) : VBarline.filterProps(props);
      return createVNode(Tag, mergeProps({
        "key": props.type,
        "class": textColorClasses.value,
        "style": textColorStyles.value,
        "viewBox": `0 0 ${props.width} ${parseInt(totalHeight.value, 10)}`
      }, lineProps), slots);
    });
  }
});

// node_modules/vuetify/lib/labs/VSpeedDial/VSpeedDial.mjs
import "C:/Users/qazwe/OneDrive/桌面/test/node_modules/vuetify/lib/labs/VSpeedDial/VSpeedDial.css";
var makeVSpeedDialProps = propsFactory({
  ...makeComponentProps(),
  ...makeVMenuProps({
    offset: 8,
    minWidth: 0,
    location: "top center"
  }),
  ...makeTransitionProps({
    transition: "fade-transition"
  })
}, "VSpeedDial");
var VSpeedDial = genericComponent()({
  name: "VSpeedDial",
  props: makeVSpeedDialProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const menuRef = ref();
    useRender(() => {
      const menuProps = VMenu.filterProps(props);
      return createVNode(VMenu, mergeProps(menuProps, {
        "class": props.class,
        "style": props.style,
        "contentClass": "v-speed-dial__content",
        "ref": menuRef
      }), {
        ...slots,
        default: (slotProps) => createVNode(VDefaultsProvider, {
          "defaults": {
            VBtn: {
              size: "small"
            }
          }
        }, {
          default: () => [createVNode(MaybeTransition, {
            "appear": true,
            "group": true,
            "transition": props.transition
          }, {
            default: () => {
              var _a;
              return [(_a = slots.default) == null ? void 0 : _a.call(slots, slotProps)];
            }
          })]
        })
      });
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VTimePicker/VTimePicker.mjs
import "C:/Users/qazwe/OneDrive/桌面/test/node_modules/vuetify/lib/labs/VTimePicker/VTimePicker.css";

// node_modules/vuetify/lib/labs/VTimePicker/VTimePickerClock.mjs
import "C:/Users/qazwe/OneDrive/桌面/test/node_modules/vuetify/lib/labs/VTimePicker/VTimePickerClock.css";
var makeVTimePickerClockProps = propsFactory({
  allowedValues: Function,
  ampm: Boolean,
  color: String,
  disabled: Boolean,
  displayedValue: {
    default: null
  },
  double: Boolean,
  format: {
    type: Function,
    default: (val) => val
  },
  max: {
    type: Number,
    required: true
  },
  min: {
    type: Number,
    required: true
  },
  scrollable: Boolean,
  readonly: Boolean,
  rotate: {
    type: Number,
    default: 0
  },
  step: {
    type: Number,
    default: 1
  },
  modelValue: {
    type: Number
  }
}, "VTimePickerClock");
var VTimePickerClock = genericComponent()({
  name: "VTimePickerClock",
  props: makeVTimePickerClockProps(),
  emits: {
    change: (val) => val,
    input: (val) => val
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const clockRef = ref(null);
    const innerClockRef = ref(null);
    const inputValue = ref(void 0);
    const isDragging = ref(false);
    const valueOnMouseDown = ref(null);
    const valueOnMouseUp = ref(null);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const count = computed(() => props.max - props.min + 1);
    const roundCount = computed(() => props.double ? count.value / 2 : count.value);
    const degreesPerUnit = computed(() => 360 / roundCount.value);
    const degrees = computed(() => degreesPerUnit.value * Math.PI / 180);
    const displayedValue = computed(() => props.modelValue == null ? props.min : props.modelValue);
    const innerRadiusScale = computed(() => 0.62);
    const genChildren = computed(() => {
      const children = [];
      for (let value = props.min; value <= props.max; value = value + props.step) {
        children.push(value);
      }
      return children;
    });
    watch(() => props.modelValue, (val) => {
      inputValue.value = val;
    });
    function update(value) {
      if (inputValue.value !== value) {
        inputValue.value = value;
      }
      emit("input", value);
    }
    function isAllowed(value) {
      return !props.allowedValues || props.allowedValues(value);
    }
    function wheel(e) {
      e.preventDefault();
      const delta = Math.sign(-e.deltaY || 1);
      let value = displayedValue.value;
      do {
        value = value + delta;
        value = (value - props.min + count.value) % count.value + props.min;
      } while (!isAllowed(value) && value !== displayedValue.value);
      if (value !== props.displayedValue) {
        update(value);
      }
    }
    function isInner(value) {
      return props.double && value - props.min >= roundCount.value;
    }
    function handScale(value) {
      return isInner(value) ? innerRadiusScale.value : 1;
    }
    function getPosition(value) {
      const rotateRadians = props.rotate * Math.PI / 180;
      return {
        x: Math.sin((value - props.min) * degrees.value + rotateRadians) * handScale(value),
        y: -Math.cos((value - props.min) * degrees.value + rotateRadians) * handScale(value)
      };
    }
    function angleToValue(angle2, insideClick) {
      const value = (Math.round(angle2 / degreesPerUnit.value) + (insideClick ? roundCount.value : 0)) % count.value + props.min;
      if (angle2 < 360 - degreesPerUnit.value / 2)
        return value;
      return insideClick ? props.max - roundCount.value + 1 : props.min;
    }
    function getTransform(i) {
      const {
        x,
        y
      } = getPosition(i);
      return {
        left: `${50 + x * 50}%`,
        top: `${50 + y * 50}%`
      };
    }
    function euclidean(p0, p1) {
      const dx = p1.x - p0.x;
      const dy = p1.y - p0.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
    function angle(center, p1) {
      const value = 2 * Math.atan2(p1.y - center.y - euclidean(center, p1), p1.x - center.x);
      return Math.abs(value * 180 / Math.PI);
    }
    function setMouseDownValue(value) {
      if (valueOnMouseDown.value === null) {
        valueOnMouseDown.value = value;
      }
      valueOnMouseUp.value = value;
      update(value);
    }
    function onDragMove(e) {
      var _a, _b;
      e.preventDefault();
      if (!isDragging.value && e.type !== "click" || !clockRef.value)
        return;
      const {
        width,
        top,
        left
      } = (_a = clockRef.value) == null ? void 0 : _a.getBoundingClientRect();
      const {
        width: innerWidth
      } = ((_b = innerClockRef.value) == null ? void 0 : _b.getBoundingClientRect()) ?? {
        width: 0
      };
      const {
        clientX,
        clientY
      } = "touches" in e ? e.touches[0] : e;
      const center = {
        x: width / 2,
        y: -width / 2
      };
      const coords = {
        x: clientX - left,
        y: top - clientY
      };
      const handAngle = Math.round(angle(center, coords) - props.rotate + 360) % 360;
      const insideClick = props.double && euclidean(center, coords) < (innerWidth + innerWidth * innerRadiusScale.value) / 4;
      const checksCount = Math.ceil(15 / degreesPerUnit.value);
      let value;
      for (let i = 0; i < checksCount; i++) {
        value = angleToValue(handAngle + i * degreesPerUnit.value, insideClick);
        if (isAllowed(value))
          return setMouseDownValue(value);
        value = angleToValue(handAngle - i * degreesPerUnit.value, insideClick);
        if (isAllowed(value))
          return setMouseDownValue(value);
      }
    }
    function onMouseDown(e) {
      e.preventDefault();
      valueOnMouseDown.value = null;
      valueOnMouseUp.value = null;
      isDragging.value = true;
      onDragMove(e);
    }
    function onMouseUp(e) {
      e.stopPropagation();
      isDragging.value = false;
      if (valueOnMouseUp.value !== null && isAllowed(valueOnMouseUp.value)) {
        emit("change", valueOnMouseUp.value);
      }
    }
    useRender(() => {
      return createVNode("div", {
        "class": [{
          "v-time-picker-clock": true,
          "v-time-picker-clock--indeterminate": props.modelValue == null,
          "v-time-picker-clock--readonly": props.readonly
        }],
        "onMousedown": onMouseDown,
        "onMouseup": onMouseUp,
        "onMouseleave": (e) => isDragging.value && onMouseUp(e),
        "onTouchstart": onMouseDown,
        "onTouchend": onMouseUp,
        "onMousemove": onDragMove,
        "onTouchmove": onDragMove,
        "onWheel": (e) => props.scrollable && wheel(e),
        "ref": clockRef
      }, [createVNode("div", {
        "class": "v-time-picker-clock__inner",
        "ref": innerClockRef
      }, [createVNode("div", {
        "class": [{
          "v-time-picker-clock__hand": true,
          "v-time-picker-clock__hand--inner": isInner(props.modelValue)
        }, textColorClasses.value],
        "style": [{
          transform: `rotate(${props.rotate + degreesPerUnit.value * (displayedValue.value - props.min)}deg) scaleY(${handScale(displayedValue.value)})`
        }, textColorStyles.value]
      }, null), genChildren.value.map((value) => {
        const isActive = value === displayedValue.value;
        return createVNode("div", {
          "class": [{
            "v-time-picker-clock__item": true,
            "v-time-picker-clock__item--active": isActive,
            "v-time-picker-clock__item--disabled": props.disabled || !isAllowed(value)
          }, isActive && backgroundColorClasses.value],
          "style": [getTransform(value), isActive && backgroundColorStyles.value]
        }, [createVNode("span", null, [props.format(value)])]);
      })])]);
    });
  }
});

// node_modules/vuetify/lib/labs/VTimePicker/VTimePickerControls.mjs
import "C:/Users/qazwe/OneDrive/桌面/test/node_modules/vuetify/lib/labs/VTimePicker/VTimePickerControls.css";

// node_modules/vuetify/lib/components/VDatePicker/util/pad.mjs
var padStart = (string, targetLength, padString) => {
  targetLength = targetLength >> 0;
  string = String(string);
  padString = String(padString);
  if (string.length > targetLength) {
    return String(string);
  }
  targetLength = targetLength - string.length;
  if (targetLength > padString.length) {
    padString += padString.repeat(targetLength / padString.length);
  }
  return padString.slice(0, targetLength) + String(string);
};
var pad_default = function(n) {
  let length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return padStart(n, length, "0");
};

// node_modules/vuetify/lib/labs/VTimePicker/SelectingTimes.mjs
var SelectingTimes = function(SelectingTimes2) {
  SelectingTimes2[SelectingTimes2["Hour"] = 1] = "Hour";
  SelectingTimes2[SelectingTimes2["Minute"] = 2] = "Minute";
  SelectingTimes2[SelectingTimes2["Second"] = 3] = "Second";
  return SelectingTimes2;
}(SelectingTimes || {});

// node_modules/vuetify/lib/labs/VTimePicker/VTimePickerControls.mjs
var makeVTimePickerControlsProps = propsFactory({
  ampm: Boolean,
  ampmReadonly: Boolean,
  color: String,
  disabled: Boolean,
  hour: Number,
  minute: Number,
  second: Number,
  period: String,
  readonly: Boolean,
  useSeconds: Boolean,
  selecting: Number,
  value: Number
}, "VTimePickerControls");
var VTimePickerControls = genericComponent()({
  name: "VTimePickerControls",
  props: makeVTimePickerControlsProps(),
  emits: {
    "update:period": (data) => data,
    "update:selecting": (data) => data
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    useRender(() => {
      let hour = props.hour;
      if (props.ampm) {
        hour = hour ? (hour - 1) % 12 + 1 : 12;
      }
      return createVNode("div", {
        "class": "v-time-picker-controls"
      }, [createVNode("div", {
        "class": {
          "v-time-picker-controls__time": true,
          "v-time-picker-controls__time--with-seconds": props.useSeconds
        }
      }, [createVNode(VBtn, {
        "active": props.selecting === 1,
        "color": props.selecting === 1 ? props.color : void 0,
        "variant": "tonal",
        "class": {
          "v-time-picker-controls__time__btn": true,
          "v-time-picker-controls__time--with-ampm__btn": props.ampm,
          "v-time-picker-controls__time--with-seconds__btn": props.useSeconds
        },
        "text": props.hour == null ? "--" : pad_default(`${hour}`),
        "onClick": () => emit("update:selecting", SelectingTimes.Hour)
      }, null), createVNode("span", {
        "class": ["v-time-picker-controls__time__separator", {
          "v-time-picker-controls--with-seconds__time__separator": props.useSeconds
        }]
      }, [createTextVNode(":")]), createVNode(VBtn, {
        "active": props.selecting === 2,
        "color": props.selecting === 2 ? props.color : void 0,
        "class": {
          "v-time-picker-controls__time__btn": true,
          "v-time-picker-controls__time__btn__active": props.selecting === 2,
          "v-time-picker-controls__time--with-ampm__btn": props.ampm,
          "v-time-picker-controls__time--with-seconds__btn": props.useSeconds
        },
        "variant": "tonal",
        "text": props.minute == null ? "--" : pad_default(props.minute),
        "onClick": () => emit("update:selecting", SelectingTimes.Minute)
      }, null), props.useSeconds && createVNode("span", {
        "class": ["v-time-picker-controls__time__separator", {
          "v-time-picker-controls--with-seconds__time__separator": props.useSeconds
        }],
        "key": "secondsDivider"
      }, [createTextVNode(":")]), props.useSeconds && createVNode(VBtn, {
        "key": "secondsVal",
        "variant": "tonal",
        "onClick": () => emit("update:selecting", SelectingTimes.Second),
        "class": {
          "v-time-picker-controls__time__btn": true,
          "v-time-picker-controls__time__btn__active": props.selecting === 3,
          "v-time-picker-controls__time--with-seconds__btn": props.useSeconds
        },
        "text": props.second == null ? "--" : pad_default(props.second)
      }, null), props.ampm && createVNode("div", {
        "class": ["v-time-picker-controls__ampm", {
          "v-time-picker-controls__ampm--readonly": props.ampmReadonly
        }]
      }, [createVNode(VBtn, {
        "active": props.period === "am",
        "color": props.period === "am" ? props.color : void 0,
        "class": {
          "v-time-picker-controls__ampm__am": true,
          "v-time-picker-controls__ampm__btn": true,
          "v-time-picker-controls__ampm__btn__active": props.period === "am"
        },
        "text": t("$vuetify.timePicker.am"),
        "variant": "tonal",
        "onClick": () => props.period !== "am" ? emit("update:period", "am") : null
      }, null), createVNode(VBtn, {
        "active": props.period === "pm",
        "color": props.period === "pm" ? props.color : void 0,
        "class": {
          "v-time-picker-controls__ampm__pm": true,
          "v-time-picker-controls__ampm__btn": true,
          "v-time-picker-controls__ampm__btn__active": props.period === "pm"
        },
        "text": t("$vuetify.timePicker.pm"),
        "variant": "tonal",
        "onClick": () => props.period !== "pm" ? emit("update:period", "pm") : null
      }, null)])])]);
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VTimePicker/VTimePicker.mjs
var rangeHours24 = createRange(24);
var rangeHours12am = createRange(12);
var rangeHours12pm = rangeHours12am.map((v) => v + 12);
var range60 = createRange(60);
var selectingNames = {
  1: "hour",
  2: "minute",
  3: "second"
};
var makeVTimePickerProps = propsFactory({
  allowedHours: [Function, Array],
  allowedMinutes: [Function, Array],
  allowedSeconds: [Function, Array],
  ampmInTitle: Boolean,
  disabled: Boolean,
  format: {
    type: String,
    default: "ampm"
  },
  max: String,
  min: String,
  modelValue: null,
  readonly: Boolean,
  scrollable: Boolean,
  useSeconds: Boolean,
  ...omit(makeVPickerProps({
    title: "$vuetify.timePicker.title"
  }), ["landscape"])
}, "VTimePicker");
var VTimePicker = genericComponent()({
  name: "VTimePicker",
  props: makeVTimePickerProps(),
  emits: {
    "update:hour": (val) => val,
    "update:minute": (val) => val,
    "update:period": (val) => val,
    "update:second": (val) => val,
    "update:modelValue": (val) => val
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const inputHour = ref(null);
    const inputMinute = ref(null);
    const inputSecond = ref(null);
    const lazyInputHour = ref(null);
    const lazyInputMinute = ref(null);
    const lazyInputSecond = ref(null);
    const period = ref("am");
    const selecting = ref(SelectingTimes.Hour);
    const controlsRef = ref(null);
    const clockRef = ref(null);
    const isAllowedHourCb = computed(() => {
      let cb;
      if (props.allowedHours instanceof Array) {
        cb = (val) => props.allowedHours.includes(val);
      } else {
        cb = props.allowedHours;
      }
      if (!props.min && !props.max)
        return cb;
      const minHour = props.min ? Number(props.min.split(":")[0]) : 0;
      const maxHour = props.max ? Number(props.max.split(":")[0]) : 23;
      return (val) => {
        return val >= minHour * 1 && val <= maxHour * 1 && (!cb || cb(val));
      };
    });
    const isAllowedMinuteCb = computed(() => {
      let cb;
      const isHourAllowed = !isAllowedHourCb.value || inputHour.value === null || isAllowedHourCb.value(inputHour.value);
      if (props.allowedMinutes instanceof Array) {
        cb = (val) => props.allowedMinutes.includes(val);
      } else {
        cb = props.allowedMinutes;
      }
      if (!props.min && !props.max) {
        return isHourAllowed ? cb : () => false;
      }
      const [minHour, minMinute] = props.min ? props.min.split(":").map(Number) : [0, 0];
      const [maxHour, maxMinute] = props.max ? props.max.split(":").map(Number) : [23, 59];
      const minTime = minHour * 60 + minMinute * 1;
      const maxTime = maxHour * 60 + maxMinute * 1;
      return (val) => {
        const time = 60 * inputHour.value + val;
        return time >= minTime && time <= maxTime && isHourAllowed && (!cb || cb(val));
      };
    });
    const isAllowedSecondCb = computed(() => {
      let cb;
      const isHourAllowed = !isAllowedHourCb.value || inputHour.value === null || isAllowedHourCb.value(inputHour.value);
      const isMinuteAllowed = isHourAllowed && (!isAllowedMinuteCb.value || inputMinute.value === null || isAllowedMinuteCb.value(inputMinute.value));
      if (props.allowedSeconds instanceof Array) {
        cb = (val) => props.allowedSeconds.includes(val);
      } else {
        cb = props.allowedSeconds;
      }
      if (!props.min && !props.max) {
        return isMinuteAllowed ? cb : () => false;
      }
      const [minHour, minMinute, minSecond] = props.min ? props.min.split(":").map(Number) : [0, 0, 0];
      const [maxHour, maxMinute, maxSecond] = props.max ? props.max.split(":").map(Number) : [23, 59, 59];
      const minTime = minHour * 3600 + minMinute * 60 + (minSecond || 0) * 1;
      const maxTime = maxHour * 3600 + maxMinute * 60 + (maxSecond || 0) * 1;
      return (val) => {
        const time = 3600 * inputHour.value + 60 * inputMinute.value + val;
        return time >= minTime && time <= maxTime && isMinuteAllowed && (!cb || cb(val));
      };
    });
    const isAmPm = computed(() => {
      return props.format === "ampm";
    });
    watch(() => props.modelValue, (val) => setInputData(val));
    onMounted(() => {
      setInputData(props.modelValue);
    });
    function genValue() {
      if (inputHour.value != null && inputMinute.value != null && (!props.useSeconds || inputSecond.value != null)) {
        return `${pad_default(inputHour.value)}:${pad_default(inputMinute.value)}` + (props.useSeconds ? `:${pad_default(inputSecond.value)}` : "");
      }
      return null;
    }
    function emitValue() {
      const value = genValue();
      if (value !== null)
        emit("update:modelValue", value);
    }
    function convert24to12(hour) {
      return hour ? (hour - 1) % 12 + 1 : 12;
    }
    function convert12to24(hour, period2) {
      return hour % 12 + (period2 === "pm" ? 12 : 0);
    }
    function setInputData(value) {
      if (value == null || value === "") {
        inputHour.value = null;
        inputMinute.value = null;
        inputSecond.value = null;
      } else if (value instanceof Date) {
        inputHour.value = value.getHours();
        inputMinute.value = value.getMinutes();
        inputSecond.value = value.getSeconds();
      } else {
        const [hour, , minute, , second, period2] = value.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
        inputHour.value = period2 ? convert12to24(parseInt(hour, 10), period2) : parseInt(hour, 10);
        inputMinute.value = parseInt(minute, 10);
        inputSecond.value = parseInt(second || 0, 10);
      }
      period.value = inputHour.value == null || inputHour.value < 12 ? "am" : "pm";
    }
    function firstAllowed(type, value) {
      const allowedFn = type === "hour" ? isAllowedHourCb.value : type === "minute" ? isAllowedMinuteCb.value : isAllowedSecondCb.value;
      if (!allowedFn)
        return value;
      const range = type === "minute" ? range60 : type === "second" ? range60 : isAmPm.value ? value < 12 ? rangeHours12am : rangeHours12pm : rangeHours24;
      const first = range.find((v) => allowedFn((v + value) % range.length + range[0]));
      return ((first || 0) + value) % range.length + range[0];
    }
    function setPeriod(val) {
      period.value = val;
      if (inputHour.value != null) {
        const newHour = inputHour.value + (period.value === "am" ? -12 : 12);
        inputHour.value = firstAllowed("hour", newHour);
      }
      emit("update:period", val);
      emitValue();
      return true;
    }
    function onInput(value) {
      if (selecting.value === SelectingTimes.Hour) {
        inputHour.value = isAmPm.value ? convert12to24(value, period.value) : value;
      } else if (selecting.value === SelectingTimes.Minute) {
        inputMinute.value = value;
      } else {
        inputSecond.value = value;
      }
    }
    function onChange(value) {
      switch (selectingNames[selecting.value]) {
        case "hour":
          emit("update:hour", value);
          break;
        case "minutes":
          emit("update:minute", value);
          break;
        case "seconds":
          emit("update:second", value);
          break;
        default:
          break;
      }
      const emitChange = selecting.value === (props.useSeconds ? SelectingTimes.Second : SelectingTimes.Minute);
      if (selecting.value === SelectingTimes.Hour) {
        selecting.value = SelectingTimes.Minute;
      } else if (props.useSeconds && selecting.value === SelectingTimes.Minute) {
        selecting.value = SelectingTimes.Second;
      }
      if (inputHour.value === lazyInputHour.value && inputMinute.value === lazyInputMinute.value && (!props.useSeconds || inputSecond.value === lazyInputSecond.value))
        return;
      const time = genValue();
      if (time === null)
        return;
      lazyInputHour.value = inputHour.value;
      lazyInputMinute.value = inputMinute.value;
      props.useSeconds && (lazyInputSecond.value = inputSecond.value);
      emitChange && emitValue();
    }
    useRender(() => {
      const pickerProps = VPicker.filterProps(props);
      const timePickerControlsProps = VTimePickerControls.filterProps(props);
      const timePickerClockProps = VTimePickerClock.filterProps(omit(props, ["format", "modelValue", "min", "max"]));
      return createVNode(VPicker, mergeProps(pickerProps, {
        "color": void 0,
        "class": ["v-time-picker", props.class],
        "style": props.style
      }), {
        title: () => {
          var _a;
          return ((_a = slots.title) == null ? void 0 : _a.call(slots)) ?? createVNode("div", {
            "class": "v-time-picker__title"
          }, [t(props.title)]);
        },
        header: () => createVNode(VTimePickerControls, mergeProps(timePickerControlsProps, {
          "ampm": isAmPm.value || props.ampmInTitle,
          "ampmReadonly": isAmPm.value && !props.ampmInTitle,
          "hour": inputHour.value,
          "minute": inputMinute.value,
          "period": period.value,
          "second": inputSecond.value,
          "selecting": selecting.value,
          "onUpdate:period": (val) => setPeriod(val),
          "onUpdate:selecting": (value) => selecting.value = value,
          "ref": controlsRef
        }), null),
        default: () => createVNode(VTimePickerClock, mergeProps(timePickerClockProps, {
          "allowedValues": selecting.value === SelectingTimes.Hour ? isAllowedHourCb.value : selecting.value === SelectingTimes.Minute ? isAllowedMinuteCb.value : isAllowedSecondCb.value,
          "double": selecting.value === SelectingTimes.Hour && !isAmPm.value,
          "format": selecting.value === SelectingTimes.Hour ? isAmPm.value ? convert24to12 : (val) => val : (val) => pad_default(val, 2),
          "max": selecting.value === SelectingTimes.Hour ? isAmPm.value && period.value === "am" ? 11 : 23 : 59,
          "min": selecting.value === SelectingTimes.Hour && isAmPm.value && period.value === "pm" ? 12 : 0,
          "size": 20,
          "step": selecting.value === SelectingTimes.Hour ? 1 : 5,
          "modelValue": selecting.value === SelectingTimes.Hour ? inputHour.value : selecting.value === SelectingTimes.Minute ? inputMinute.value : inputSecond.value,
          "onChange": onChange,
          "onInput": onInput,
          "ref": clockRef
        }), null),
        actions: slots.actions
      });
    });
  }
});

// node_modules/vuetify/lib/labs/VTreeview/VTreeviewGroup.mjs
var makeVTreeviewGroupProps = propsFactory({
  ...omit(makeVListGroupProps({
    collapseIcon: "$treeviewCollapse",
    expandIcon: "$treeviewExpand"
  }), ["subgroup"])
}, "VTreeviewGroup");
var VTreeviewGroup = genericComponent()({
  name: "VTreeviewGroup",
  props: makeVTreeviewGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vListGroupRef = ref();
    const toggleIcon = computed(() => {
      var _a;
      return ((_a = vListGroupRef.value) == null ? void 0 : _a.isOpen) ? props.collapseIcon : props.expandIcon;
    });
    const activatorDefaults = computed(() => {
      var _a;
      return {
        VTreeviewItem: {
          prependIcon: void 0,
          appendIcon: void 0,
          active: (_a = vListGroupRef.value) == null ? void 0 : _a.isOpen,
          toggleIcon: toggleIcon.value
        }
      };
    });
    useRender(() => {
      const listGroupProps = VListGroup.filterProps(props);
      return createVNode(VListGroup, mergeProps(listGroupProps, {
        "ref": vListGroupRef,
        "class": ["v-treeview-group", props.class],
        "subgroup": true
      }), {
        ...slots,
        activator: slots.activator ? (slotProps) => createVNode(Fragment, null, [createVNode(VDefaultsProvider, {
          "defaults": activatorDefaults.value
        }, {
          default: () => {
            var _a;
            return [(_a = slots.activator) == null ? void 0 : _a.call(slots, slotProps)];
          }
        })]) : void 0
      });
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VTreeview/VTreeviewItem.mjs
import "C:/Users/qazwe/OneDrive/桌面/test/node_modules/vuetify/lib/labs/VTreeview/VTreeviewItem.css";

// node_modules/vuetify/lib/labs/VTreeview/shared.mjs
var VTreeviewSymbol = Symbol.for("vuetify:v-treeview");

// node_modules/vuetify/lib/labs/VTreeview/VTreeviewItem.mjs
var makeVTreeviewItemProps = propsFactory({
  loading: Boolean,
  toggleIcon: IconValue,
  ...makeVListItemProps({
    slim: true
  })
}, "VTreeviewItem");
var VTreeviewItem = genericComponent()({
  name: "VTreeviewItem",
  props: makeVTreeviewItemProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const link = useLink(props, attrs);
    const id = computed(() => props.value === void 0 ? link.href.value : props.value);
    const vListItemRef = ref();
    const isClickable = computed(() => {
      var _a;
      return !props.disabled && props.link !== false && (props.link || link.isClickable.value || props.value != null && !!((_a = vListItemRef.value) == null ? void 0 : _a.list));
    });
    function onClick(e) {
      var _a, _b, _c;
      if (!((_a = vListItemRef.value) == null ? void 0 : _a.isGroupActivator) || !isClickable.value)
        return;
      props.value != null && ((_c = vListItemRef.value) == null ? void 0 : _c.select(!((_b = vListItemRef.value) == null ? void 0 : _b.isSelected), e));
    }
    function onKeyDown(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick(e);
      }
    }
    const visibleIds = inject(VTreeviewSymbol, {
      visibleIds: ref()
    }).visibleIds;
    useRender(() => {
      const listItemProps = VListItem.filterProps(props);
      const hasPrepend = slots.prepend || props.toggleIcon;
      return createVNode(VListItem, mergeProps({
        "ref": vListItemRef
      }, listItemProps, {
        "class": ["v-treeview-item", {
          "v-treeview-item--filtered": visibleIds.value && !visibleIds.value.has(id.value)
        }, props.class],
        "onClick": onClick,
        "onKeydown": isClickable.value && onKeyDown
      }), {
        ...slots,
        prepend: hasPrepend ? (slotProps) => {
          var _a;
          return createVNode(Fragment, null, [props.toggleIcon && createVNode(VListItemAction, {
            "start": false
          }, {
            default: () => [createVNode(VBtn, {
              "density": "compact",
              "icon": props.toggleIcon,
              "loading": props.loading,
              "variant": "text"
            }, {
              loader() {
                return createVNode(VProgressCircular, {
                  "indeterminate": "disable-shrink",
                  "size": "20",
                  "width": "2"
                }, null);
              }
            })]
          }), (_a = slots.prepend) == null ? void 0 : _a.call(slots, slotProps)]);
        } : void 0
      });
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VTreeview/VTreeviewChildren.mjs
var makeVTreeviewChildrenProps = propsFactory({
  loadChildren: Function,
  loadingIcon: {
    type: String,
    default: "$loading"
  },
  items: Array,
  selectable: Boolean
}, "VTreeviewChildren");
var VTreeviewChildren = genericComponent()({
  name: "VTreeviewChildren",
  props: makeVTreeviewChildrenProps(),
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const isLoading = shallowRef(false);
    const hasLoaded = shallowRef(false);
    function checkChildren(item) {
      return new Promise((resolve) => {
        var _a;
        if (!((_a = props.items) == null ? void 0 : _a.length) || !props.loadChildren || hasLoaded.value)
          return resolve();
        isLoading.value = true;
        props.loadChildren(item).then(resolve);
      }).then(() => {
        hasLoaded.value = true;
      }).finally(() => {
        isLoading.value = false;
      });
    }
    function onClick(e, item) {
      e.stopPropagation();
      checkChildren(item);
    }
    return () => {
      var _a, _b;
      return ((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? ((_b = props.items) == null ? void 0 : _b.map((_ref2) => {
        var _a2;
        let {
          children,
          props: itemProps,
          raw: item
        } = _ref2;
        const slotsWithItem = {
          prepend: slots.prepend ? (slotProps) => {
            var _a3;
            return (_a3 = slots.prepend) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item
            });
          } : props.selectable ? (_ref3) => {
            let {
              isSelected,
              isIndeterminate
            } = _ref3;
            return createVNode(VCheckboxBtn, {
              "key": item.value,
              "tabindex": "-1",
              "modelValue": isSelected,
              "loading": isLoading.value,
              "indeterminate": isIndeterminate,
              "onClick": (e) => onClick(e, item)
            }, null);
          } : void 0,
          append: slots.append ? (slotProps) => {
            var _a3;
            return (_a3 = slots.append) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item
            });
          } : void 0,
          title: slots.title ? (slotProps) => {
            var _a3;
            return (_a3 = slots.title) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item
            });
          } : void 0
        };
        const treeviewGroupProps = VTreeviewGroup.filterProps(itemProps);
        const treeviewChildrenProps = VTreeviewChildren.filterProps(props);
        return children ? createVNode(VTreeviewGroup, mergeProps({
          "value": itemProps == null ? void 0 : itemProps.value
        }, treeviewGroupProps), {
          activator: (_ref4) => {
            let {
              props: activatorProps
            } = _ref4;
            return createVNode(VTreeviewItem, mergeProps(itemProps, activatorProps, {
              "loading": isLoading.value,
              "onClick": (e) => onClick(e, item)
            }), slotsWithItem);
          },
          default: () => createVNode(VTreeviewChildren, mergeProps(treeviewChildrenProps, {
            "items": children
          }), slots)
        }) : ((_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
          props: itemProps
        })) ?? createVNode(VTreeviewItem, itemProps, slotsWithItem);
      }));
    };
  }
});

// node_modules/vuetify/lib/labs/VTreeview/VTreeview.mjs
function flatten(items) {
  let flat = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const item of items) {
    flat.push(item);
    if (item.children)
      flatten(item.children, flat);
  }
  return flat;
}
var makeVTreeviewProps = propsFactory({
  openAll: Boolean,
  search: String,
  ...makeFilterProps({
    filterKeys: ["title"]
  }),
  ...makeVTreeviewChildrenProps(),
  ...omit(makeVListProps({
    collapseIcon: "$treeviewCollapse",
    expandIcon: "$treeviewExpand",
    selectStrategy: "independent",
    openStrategy: "multiple",
    slim: true
  }), ["nav"])
}, "VTreeview");
var VTreeview = genericComponent()({
  name: "VTreeview",
  props: makeVTreeviewProps(),
  emits: {
    "update:opened": (val) => true,
    "update:activated": (val) => true,
    "update:selected": (val) => true,
    "click:open": (value) => true,
    "click:select": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      items
    } = useListItems(props);
    const activeColor = toRef(props, "activeColor");
    const baseColor = toRef(props, "baseColor");
    const color = toRef(props, "color");
    const opened = useProxiedModel(props, "opened");
    const activated = useProxiedModel(props, "activated");
    const selected = useProxiedModel(props, "selected");
    const vListRef = ref();
    const flatItems = computed(() => flatten(items.value));
    const search = toRef(props, "search");
    const {
      filteredItems
    } = useFilter(props, flatItems, search);
    const visibleIds = computed(() => {
      if (!search.value) {
        return null;
      }
      return new Set(filteredItems.value.flatMap((item) => {
        return [...getPath(item.props.value), ...getChildren(item.props.value)];
      }));
    });
    function getPath(id) {
      var _a;
      const path = [];
      let parent = id;
      while (parent != null) {
        path.unshift(parent);
        parent = (_a = vListRef.value) == null ? void 0 : _a.parents.get(parent);
      }
      return path;
    }
    function getChildren(id) {
      var _a, _b;
      const arr = [];
      const queue = (((_a = vListRef.value) == null ? void 0 : _a.children.get(id)) ?? []).slice();
      while (queue.length) {
        const child = queue.shift();
        if (!child)
          continue;
        arr.push(child);
        queue.push(...(((_b = vListRef.value) == null ? void 0 : _b.children.get(child)) ?? []).slice());
      }
      return arr;
    }
    watch(() => props.openAll, (val) => {
      opened.value = val ? openAll(items.value) : [];
    }, {
      immediate: true
    });
    function openAll(item) {
      let ids = [];
      for (const i of item) {
        if (!i.children)
          continue;
        ids.push(i.value);
        if (i.children) {
          ids = ids.concat(openAll(i.children));
        }
      }
      return ids;
    }
    provide(VTreeviewSymbol, {
      visibleIds
    });
    provideDefaults({
      VTreeviewGroup: {
        activeColor,
        baseColor,
        color,
        collapseIcon: toRef(props, "collapseIcon"),
        expandIcon: toRef(props, "expandIcon")
      },
      VTreeviewItem: {
        activeClass: toRef(props, "activeClass"),
        activeColor,
        baseColor,
        color,
        density: toRef(props, "density"),
        disabled: toRef(props, "disabled"),
        lines: toRef(props, "lines"),
        variant: toRef(props, "variant")
      }
    });
    useRender(() => {
      const listProps = VList.filterProps(props);
      const treeviewChildrenProps = VTreeviewChildren.filterProps(props);
      return createVNode(VList, mergeProps({
        "ref": vListRef
      }, listProps, {
        "class": ["v-treeview", props.class],
        "style": props.style,
        "opened": opened.value,
        "onUpdate:opened": ($event) => opened.value = $event,
        "activated": activated.value,
        "onUpdate:activated": ($event) => activated.value = $event,
        "selected": selected.value,
        "onUpdate:selected": ($event) => selected.value = $event
      }), {
        default: () => [createVNode(VTreeviewChildren, mergeProps(treeviewChildrenProps, {
          "items": items.value
        }), slots)]
      });
    });
    return {
      open
    };
  }
});
export {
  VCalendar,
  VCalendarDay,
  VCalendarHeader,
  VCalendarInterval,
  VCalendarIntervalEvent,
  VCalendarMonthDay,
  VConfirmEdit,
  VEmptyState,
  VFab,
  VNumberInput,
  VPicker,
  VPickerTitle,
  VSparkline,
  VSpeedDial,
  VTimePicker,
  VTimePickerClock,
  VTimePickerControls,
  VTreeview,
  VTreeviewGroup,
  VTreeviewItem
};
//# sourceMappingURL=vuetify_labs_components.js.map
