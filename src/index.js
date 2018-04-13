
import Pagination from './lib/ele-components/pagination/index.js';
import Dialog from './lib/ele-components/dialog/index.js';
import Autocomplete from './lib/ele-components/autocomplete/index.js';
import Dropdown from './lib/ele-components/dropdown/index.js';
import DropdownMenu from './lib/ele-components/dropdown-menu/index.js';
import DropdownItem from './lib/ele-components/dropdown-item/index.js';
import Menu from './lib/ele-components/menu/index.js';
import Submenu from './lib/ele-components/submenu/index.js';
import MenuItem from './lib/ele-components/menu-item/index.js';
import MenuItemGroup from './lib/ele-components/menu-item-group/index.js';
import Input from './lib/ele-components/input/index.js';
import InputNumber from './lib/ele-components/input-number/index.js';
import Radio from './lib/ele-components/radio/index.js';
import RadioGroup from './lib/ele-components/radio-group/index.js';
import RadioButton from './lib/ele-components/radio-button/index.js';
import Checkbox from './lib/ele-components/checkbox/index.js';
import CheckboxButton from './lib/ele-components/checkbox-button/index.js';
import CheckboxGroup from './lib/ele-components/checkbox-group/index.js';
import Switch from './lib/ele-components/switch/index.js';
import Select from './lib/ele-components/select/index.js';
import Option from './lib/ele-components/option/index.js';
import OptionGroup from './lib/ele-components/option-group/index.js';
import Button from './lib/ele-components/button/index.js';
import ButtonGroup from './lib/ele-components/button-group/index.js';
import Table from './lib/ele-components/table/index.js';
import TableColumn from './lib/ele-components/table-column/index.js';
import DatePicker from './lib/ele-components/date-picker/index.js';
import TimeSelect from './lib/ele-components/time-select/index.js';
import TimePicker from './lib/ele-components/time-picker/index.js';
import Popover from './lib/ele-components/popover/index.js';
import Tooltip from './lib/ele-components/tooltip/index.js';
import MessageBox from './lib/ele-components/message-box/index.js';
import Breadcrumb from './lib/ele-components/breadcrumb/index.js';
import BreadcrumbItem from './lib/ele-components/breadcrumb-item/index.js';
import Form from './lib/ele-components/form/index.js';
import FormItem from './lib/ele-components/form-item/index.js';
import Tabs from './lib/ele-components/tabs/index.js';
import TabPane from './lib/ele-components/tab-pane/index.js';
import Tag from './lib/ele-components/tag/index.js';
import Tree from './lib/ele-components/tree/index.js';
import Alert from './lib/ele-components/alert/index.js';
import Notification from './lib/ele-components/notification/index.js';
import Slider from './lib/ele-components/slider/index.js';
import Loading from './lib/ele-components/loading/index.js';
import Icon from './lib/ele-components/icon/index.js';
import Row from './lib/ele-components/row/index.js';
import Col from './lib/ele-components/col/index.js';
import Upload from './lib/ele-components/upload/index.js';
import Progress from './lib/ele-components/progress/index.js';
import Spinner from './lib/ele-components/spinner/index.js';
import Message from './lib/ele-components/message/index.js';
import Badge from './lib/ele-components/badge/index.js';
import Card from './lib/ele-components/card/index.js';
import Rate from './lib/ele-components/rate/index.js';
import Steps from './lib/ele-components/steps/index.js';
import Step from './lib/ele-components/step/index.js';
import Carousel from './lib/ele-components/carousel/index.js';
import Scrollbar from './lib/ele-components/scrollbar/index.js';
import CarouselItem from './lib/ele-components/carousel-item/index.js';
import Collapse from './lib/ele-components/collapse/index.js';
import CollapseItem from './lib/ele-components/collapse-item/index.js';
import Cascader from './lib/ele-components/cascader/index.js';
import ColorPicker from './lib/ele-components/color-picker/index.js';
import Transfer from './lib/ele-components/transfer/index.js';
import Container from './lib/ele-components/container/index.js';
import Header from './lib/ele-components/header/index.js';
import Aside from './lib/ele-components/aside/index.js';
import Main from './lib/ele-components/main/index.js';
import Footer from './lib/ele-components/footer/index.js';
import locale from '@/locale';
import CollapseTransition from '@/transitions/collapse-transition';
import './lib/ele-components/theme-chalk/src/index.scss';

const components = [
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  CollapseTransition
];

const install = function (Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.map(component => {
    Vue.component(component.name.replace('El', 'i'), component);
  });

  Vue.use(Loading.directive);

  const ELEMENT = {};
  ELEMENT.size = opts.size || '';

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

  Vue.prototype.$ELEMENT = ELEMENT;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '2.3.3',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Loading,
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  MessageBox,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Notification,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Message,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer
};

// module.exports.default = module.exports;
