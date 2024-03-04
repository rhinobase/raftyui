import { lazy as ReactLazy } from "react";

const lazy = <T>(icon: T) =>
  ReactLazy(() =>
    import("@heroicons/react/24/outline").then((mod) => ({
      // @ts-ignore
      default: mod[icon],
    })),
  );

export const ICONS = {
  "academic-cap": {
    label: "Academic Cap",
    icon: lazy("AcademicCapIcon"),
  },
  "adjustments-horizontal": {
    label: "Adjustments Horizontal",
    icon: lazy("AdjustmentsHorizontalIcon"),
  },
  "adjustments-vertical": {
    label: "Adjustments Vertical",
    icon: lazy("AdjustmentsVerticalIcon"),
  },
  "archive-box": {
    label: "Archive Box",
    icon: lazy("ArchiveBoxIcon"),
  },
  "archive-box-arrow-down": {
    label: "Archive Box Arrow Down",
    icon: lazy("ArchiveBoxArrowDownIcon"),
  },
  "archive-box-xMark": {
    label: "Archive Box XMark",
    icon: lazy("ArchiveBoxXMarkIcon"),
  },
  "arrow-down": {
    label: "Arrow Down",
    icon: lazy("ArrowDownIcon"),
  },
  "arrow-down-circle": {
    label: "Arrow Down Circle",
    icon: lazy("ArrowDownCircleIcon"),
  },
  "arrow-down-left": {
    label: "Arrow Down Left",
    icon: lazy("ArrowDownLeftIcon"),
  },
  "arrow-down-onSquare": {
    label: "Arrow Down OnSquare",
    icon: lazy("ArrowDownOnSquareIcon"),
  },
  "arrow-down-onSquare-stack": {
    label: "Arrow Down OnSquare Stack",
    icon: lazy("ArrowDownOnSquareStackIcon"),
  },
  "arrow-down-right": {
    label: "Arrow Down Right",
    icon: lazy("ArrowDownRightIcon"),
  },
  "arrow-down-tray": {
    label: "Arrow Down Tray",
    icon: lazy("ArrowDownTrayIcon"),
  },
  "arrow-left": {
    label: "Arrow Left",
    icon: lazy("ArrowLeftIcon"),
  },
  "arrow-left-circle": {
    label: "Arrow Left Circle",
    icon: lazy("ArrowLeftCircleIcon"),
  },
  "arrow-long-down": {
    label: "Arrow Long Down",
    icon: lazy("ArrowLongDownIcon"),
  },
  "arrow-long-Left": {
    label: "Arrow Long Left",
    icon: lazy("ArrowLongLeftIcon"),
  },
  "arrow-long-right": {
    label: "Arrow Long Right",
    icon: lazy("ArrowLongRightIcon"),
  },
  "arrow-long-up": {
    label: "Arrow Long Up",
    icon: lazy("ArrowLongUpIcon"),
  },
  "arrow-path": {
    label: "Arrow Path",
    icon: lazy("ArrowPathIcon"),
  },
  "arrow-path-rounded-square": {
    label: "Arrow Path Rounded Square",
    icon: lazy("ArrowPathRoundedSquareIcon"),
  },
  "arrow-right": {
    label: "Arrow Right",
    icon: lazy("ArrowRightIcon"),
  },
  "arrow-right-circle": {
    label: "Arrow Right Circle",
    icon: lazy("ArrowRightCircleIcon"),
  },

  "arrow-top-right-onSquare": {
    label: "Arrow Top Right OnSquare",
    icon: lazy("ArrowTopRightOnSquareIcon"),
  },
  "arrow-trending-down": {
    label: "Arrow Trending Down",
    icon: lazy("ArrowTrendingDownIcon"),
  },
  "arrow-trending-up": {
    label: "Arrow Trending Up",
    icon: lazy("ArrowTrendingUpIcon"),
  },
  "arrow-up": {
    label: "Arrow Up",
    icon: lazy("ArrowUpIcon"),
  },
  "arrow-up-circle": {
    label: "Arrow Up Circle",
    icon: lazy("ArrowUpCircleIcon"),
  },
  "arrow-up-left": {
    label: "Arrow Up Left",
    icon: lazy("ArrowUpLeftIcon"),
  },
  "arrow-up-onSquare": {
    label: "Arrow Up OnSquare",
    icon: lazy("ArrowUpOnSquareIcon"),
  },
  "arrow-up-onSquare-stack": {
    label: "Arrow Up OnSquare Stack",
    icon: lazy("ArrowUpOnSquareStackIcon"),
  },
  "arrow-up-right": {
    label: "Arrow Up Right",
    icon: lazy("ArrowUpRightIcon"),
  },
  "arrow-up-tray": {
    label: "Arrow Up Tray",
    icon: lazy("ArrowUpTrayIcon"),
  },
  "arrow-uturn-down": {
    label: "Arrow Uturn Down",
    icon: lazy("ArrowUturnDownIcon"),
  },
  "arrow-uturn-left": {
    label: "Arrow Uturn Left",
    icon: lazy("ArrowUturnLeftIcon"),
  },
  "arrow-uturn-right": {
    label: "Arrow Uturn Right",
    icon: lazy("ArrowUturnRightIcon"),
  },
  "arrow-uturn-up": {
    label: "Arrow Uturn Up",
    icon: lazy("ArrowUturnUpIcon"),
  },
  "arrows-pointing-in": {
    label: "Arrows Pointing In",
    icon: lazy("ArrowsPointingInIcon"),
  },
  "arrows-pointing-out": {
    label: "Arrows Pointing Out",
    icon: lazy("ArrowsPointingOutIcon"),
  },
  "arrows-right-left": {
    label: "Arrows Right Left",
    icon: lazy("ArrowsRightLeftIcon"),
  },
  "arrows-up-down": {
    label: "ArrowsUpDown",
    icon: lazy("ArrowsUpDownIcon"),
  },

  "at-symbol": {
    label: "At Symbol",
    icon: lazy("AtSymbolIcon"),
  },
  backspace: {
    label: "Backspace",
    icon: lazy("BackspaceIcon"),
  },
  backward: {
    label: "Backward",
    icon: lazy("BackwardIcon"),
  },
  banknotes: {
    label: "Banknotes",
    icon: lazy("BanknotesIcon"),
  },
  bars2: {
    label: "Bars2",
    icon: lazy("Bars2Icon"),
  },
  bars3: {
    label: "Bars3",
    icon: lazy("Bars3Icon"),
  },
  "bars3-bottom-left": {
    label: "Bars3 Bottom Left",
    icon: lazy("Bars3BottomLeftIcon"),
  },
  "bars3-bottom-right": {
    label: "Bars3 Bottom Right",
    icon: lazy("Bars3BottomRightIcon"),
  },
  "bars3-center-left": {
    label: "Bars3 Center Left",
    icon: lazy("Bars3CenterLeftIcon"),
  },
  bars4: {
    label: "Bars4",
    icon: lazy("Bars4Icon"),
  },
  "bars-arrow-down": {
    label: "Bars Arrow Down",
    icon: lazy("BarsArrowDownIcon"),
  },
  "bars-arrow-up": {
    label: "Bars Arrow Up",
    icon: lazy("BarsArrowUpIcon"),
  },
  battery0: {
    label: "Battery0",
    icon: lazy("Battery0Icon"),
  },
  battery100: {
    label: "Battery100",
    icon: lazy("Battery100Icon"),
  },
  battery50: {
    label: "Battery50",
    icon: lazy("Battery50Icon"),
  },
  beaker: {
    label: "Beaker",
    icon: lazy("BeakerIcon"),
  },
  bell: {
    label: "Bell",
    icon: lazy("BellIcon"),
  },
  "bell-alert": {
    label: "Bell Alert",
    icon: lazy("BellAlertIcon"),
  },
  "bell-slash": {
    label: "Bell Slash",
    icon: lazy("BellSlashIcon"),
  },
  "bell-snooze": {
    label: "Bell Snooze",
    icon: lazy("BellSnoozeIcon"),
  },
  bolt: {
    label: "Bolt",
    icon: lazy("BoltIcon"),
  },
  "bolt-slash": {
    label: "Bolt Slash",
    icon: lazy("BoltSlashIcon"),
  },
  "book-open": {
    label: "Book Open",
    icon: lazy("BookOpenIcon"),
  },
  bookmark: {
    label: "Bookmark",
    icon: lazy("BookmarkIcon"),
  },
  "bookmark-slash": {
    label: "Bookmark Slash",
    icon: lazy("BookmarkSlashIcon"),
  },
  "bookmark-square": {
    label: "Bookmark Square",
    icon: lazy("BookmarkSquareIcon"),
  },
  briefcase: {
    label: "Briefcase",
    icon: lazy("BriefcaseIcon"),
  },
  "bug-ant": {
    label: "Bug Ant",
    icon: lazy("BugAntIcon"),
  },
  "building-library": {
    label: "Building Library",
    icon: lazy("BuildingLibraryIcon"),
  },
  "building-office": {
    label: "Building Office",
    icon: lazy("BuildingOfficeIcon"),
  },
  "building-office2": {
    label: "Building Office 2",
    icon: lazy("BuildingOffice2Icon"),
  },
  "building-storefront": {
    label: "Building Storefront",
    icon: lazy("BuildingStorefrontIcon"),
  },
  cake: {
    label: "Cake",
    icon: lazy("CakeIcon"),
  },
  calculator: {
    label: "Calculator",
    icon: lazy("CalculatorIcon"),
  },
  calendar: {
    label: "Calendar",
    icon: lazy("CalendarIcon"),
  },
  "calendar-days": {
    label: "Calendar Days",
    icon: lazy("CalendarDaysIcon"),
  },
  camera: {
    label: "Camera",
    icon: lazy("CameraIcon"),
  },
  "chart-bar": {
    label: "Chart Bar",
    icon: lazy("ChartBarIcon"),
  },
  "chart-bar-square": {
    label: "Chart Bar Square",
    icon: lazy("ChartBarSquareIcon"),
  },
  "chart-pie": {
    label: "Chart Pie",
    icon: lazy("ChartPieIcon"),
  },
  "chat-bubble-bottom-center": {
    label: "Chat Bubble Bottom Center",
    icon: lazy("ChatBubbleBottomCenterIcon"),
  },
  "chat-bubble-bottom-center-text": {
    label: "Chat Bubble Bottom Center Text",
    icon: lazy("ChatBubbleBottomCenterTextIcon"),
  },
  "chat-bubble-left": {
    label: "Chat Bubble Left",
    icon: lazy("ChatBubbleLeftIcon"),
  },
  "chat-bubble-left-ellipsis": {
    label: "Chat Bubble Left Ellipsis",
    icon: lazy("ChatBubbleLeftEllipsisIcon"),
  },
  "chat-bubble-left-right": {
    label: "Chat Bubble Left Right",
    icon: lazy("ChatBubbleLeftRightIcon"),
  },
  "chat-bubble-oval-left": {
    label: "Chat Bubble Oval Left",
    icon: lazy("ChatBubbleOvalLeftIcon"),
  },
  "chat-bubble-oval-left-ellipsis": {
    label: "Chat Bubble Oval Left Ellipsis",
    icon: lazy("ChatBubbleOvalLeftEllipsisIcon"),
  },
  check: {
    label: "Check",
    icon: lazy("CheckIcon"),
  },
  "check-badge": {
    label: "Check Badge",
    icon: lazy("CheckBadgeIcon"),
  },
  "check-circle": {
    label: "Check Circle",
    icon: lazy("CheckCircleIcon"),
  },
  "chevron-double-down": {
    label: "Chevron Double Down",
    icon: lazy("ChevronDoubleDownIcon"),
  },
  "chevron-double-left": {
    label: "Chevron Double Left",
    icon: lazy("ChevronDoubleLeftIcon"),
  },
  "chevron-double-right": {
    label: "Chevron Double Right",
    icon: lazy("ChevronDoubleRightIcon"),
  },
  "chevron-double-up": {
    label: "Chevron Double Up",
    icon: lazy("ChevronDoubleUpIcon"),
  },
  "chevron-down": {
    label: "Chevron Down",
    icon: lazy("ChevronDownIcon"),
  },
  "chevron-left": {
    label: "Chevron Left",
    icon: lazy("ChevronLeftIcon"),
  },
  "chevron-right": {
    label: "Chevron Right",
    icon: lazy("ChevronRightIcon"),
  },
  "chevron-up": {
    label: "Chevron Up",
    icon: lazy("ChevronUpIcon"),
  },
  "chevron-up-down": {
    label: "Chevron Up Down",
    icon: lazy("ChevronUpDownIcon"),
  },
  "circle-stack": {
    label: "Circle Stack",
    icon: lazy("CircleStackIcon"),
  },
  clipboard: {
    label: "Clipboard",
    icon: lazy("ClipboardIcon"),
  },
  "clipboard-document": {
    label: "Clipboard Document",
    icon: lazy("ClipboardDocumentIcon"),
  },
  "clipboard-document-check": {
    label: "Clipboard Document Check",
    icon: lazy("ClipboardDocumentCheckIcon"),
  },
  "clipboard-document-list": {
    label: "Clipboard Document List",
    icon: lazy("ClipboardDocumentListIcon"),
  },
  clock: {
    label: "Clock",
    icon: lazy("ClockIcon"),
  },
  cloud: {
    label: "Cloud",
    icon: lazy("CloudIcon"),
  },
  "cloud-arrow-down": {
    label: "Cloud Arrow Down",
    icon: lazy("CloudArrowDownIcon"),
  },
  "cloud-arrow-up": {
    label: "Cloud Arrow Up",
    icon: lazy("CloudArrowUpIcon"),
  },
  "code-bracket": {
    label: "Code Bracket",
    icon: lazy("CodeBracketIcon"),
  },
  "code-bracket-square": {
    label: "Code Bracket Square",
    icon: lazy("CodeBracketSquareIcon"),
  },
  cog: {
    label: "Cog",
    icon: lazy("CogIcon"),
  },
  "cog6-tooth": {
    label: "Cog6 Tooth",
    icon: lazy("Cog6ToothIcon"),
  },
  "cog8-tooth": {
    label: "Cog8 Tooth",
    icon: lazy("Cog8ToothIcon"),
  },
  "command-line": {
    label: "Command Line",
    icon: lazy("CommandLineIcon"),
  },
  "computer-desktop": {
    label: "Computer Desktop",
    icon: lazy("ComputerDesktopIcon"),
  },
  "cpu-chip": {
    label: "Cpu Chip",
    icon: lazy("CpuChipIcon"),
  },
  "credit-card": {
    label: "Credit Card",
    icon: lazy("CreditCardIcon"),
  },
  cube: {
    label: "Cube",
    icon: lazy("CubeIcon"),
  },
  "cube-transparent": {
    label: "Cube Transparent",
    icon: lazy("CubeTransparentIcon"),
  },
  "currency-bangladeshi": {
    label: "Currency Bangladeshi",
    icon: lazy("CurrencyBangladeshiIcon"),
  },
  "currency-dollar": {
    label: "Currency Dollar",
    icon: lazy("CurrencyDollarIcon"),
  },
  "currency-euro": {
    label: "Currency Euro",
    icon: lazy("CurrencyEuroIcon"),
  },
  "currency-pound": {
    label: "Currency Pound",
    icon: lazy("CurrencyPoundIcon"),
  },
  "currency-rupee": {
    label: "Currency Rupee",
    icon: lazy("CurrencyRupeeIcon"),
  },
  "currency-yen": {
    label: "Currency Yen",
    icon: lazy("CurrencyYenIcon"),
  },
  "cursor-arrow-rays": {
    label: "Cursor Arrow Rays",
    icon: lazy("CursorArrowRaysIcon"),
  },
  "cursor-arrow-ripple": {
    label: "Cursor Arrow Ripple",
    icon: lazy("CursorArrowRippleIcon"),
  },
  "device-phone-mobile": {
    label: "Device Phone Mobile",
    icon: lazy("DevicePhoneMobileIcon"),
  },
  "device-tablet": {
    label: "Device Tablet",
    icon: lazy("DeviceTabletIcon"),
  },
  document: {
    label: "Document",
    icon: lazy("DocumentIcon"),
  },
  "document-arrow-down": {
    label: "Document Arrow Down",
    icon: lazy("DocumentArrowDownIcon"),
  },
  "document-arrow-up": {
    label: "Document Arrow Up",
    icon: lazy("DocumentArrowUpIcon"),
  },
  "document-chart-bar": {
    label: "Document Chart Bar",
    icon: lazy("DocumentChartBarIcon"),
  },
  "document-check": {
    label: "Document Check",
    icon: lazy("DocumentCheckIcon"),
  },
  "document-duplicate": {
    label: "Document Duplicate",
    icon: lazy("DocumentDuplicateIcon"),
  },
  "document-magnifying-glass": {
    label: "Document Magnifying Glass",
    icon: lazy("DocumentMagnifyingGlassIcon"),
  },
  "document-minus": {
    label: "Document Minus",
    icon: lazy("DocumentMinusIcon"),
  },
  "document-plus": {
    label: "Document Plus",
    icon: lazy("DocumentPlusIcon"),
  },
  "document-text": {
    label: "Document Text",
    icon: lazy("DocumentTextIcon"),
  },

  "ellipsis-horizontal": {
    label: "Ellipsis Horizontal",
    icon: lazy("EllipsisHorizontalIcon"),
  },
  "ellipsis-horizontal-circle": {
    label: "Ellipsis Horizontal Circle",
    icon: lazy("EllipsisHorizontalCircleIcon"),
  },
  "ellipsis-vertical": {
    label: "Ellipsis Vertical",
    icon: lazy("EllipsisVerticalIcon"),
  },
  envelope: {
    label: "Envelope",
    icon: lazy("EnvelopeIcon"),
  },
  "envelope-open": {
    label: "Envelope Open",
    icon: lazy("EnvelopeOpenIcon"),
  },
  "exclamation-circle": {
    label: "Exclamation Circle",
    icon: lazy("ExclamationCircleIcon"),
  },
  "exclamation-triangle": {
    label: "Exclamation Triangle",
    icon: lazy("ExclamationTriangleIcon"),
  },
  eye: {
    label: "Eye",
    icon: lazy("EyeIcon"),
  },
  "eye-dropper": {
    label: "Eye Dropper",
    icon: lazy("EyeDropperIcon"),
  },
  "eye-slash": {
    label: "Eye Slash",
    icon: lazy("EyeSlashIcon"),
  },
  "face-frown": {
    label: "Face Frown",
    icon: lazy("FaceFrownIcon"),
  },
  "face-smile": {
    label: "Face Smile",
    icon: lazy("FaceSmileIcon"),
  },
  film: {
    label: "Film",
    icon: lazy("FilmIcon"),
  },
  "finger-print": {
    label: "Finger Print",
    icon: lazy("FingerPrintIcon"),
  },
  fire: {
    label: "Fire",
    icon: lazy("FireIcon"),
  },
  flag: {
    label: "Flag",
    icon: lazy("FlagIcon"),
  },
  folder: {
    label: "Folder",
    icon: lazy("FolderIcon"),
  },
  "folder-arrow-down": {
    label: "Folder Arrow Down",
    icon: lazy("FolderArrowDownIcon"),
  },
  "folder-minus": {
    label: "Folder Minus",
    icon: lazy("FolderMinusIcon"),
  },
  "folder-open": {
    label: "Folder Open",
    icon: lazy("FolderOpenIcon"),
  },
  "folder-plus": {
    label: "Folder Plus",
    icon: lazy("FolderPlusIcon"),
  },
  forward: {
    label: "Forward",
    icon: lazy("ForwardIcon"),
  },
  funnel: {
    label: "Funnel",
    icon: lazy("FunnelIcon"),
  },
  gif: {
    label: "Gif",
    icon: lazy("GifIcon"),
  },
  gift: {
    label: "Gift",
    icon: lazy("GiftIcon"),
  },
  "gift-top": {
    label: "Gift Top",
    icon: lazy("GiftTopIcon"),
  },
  "globe-alt": {
    label: "Globe Alt",
    icon: lazy("GlobeAltIcon"),
  },
  "globe-americas": {
    label: "Globe Americas",
    icon: lazy("GlobeAmericasIcon"),
  },
  "globe-asia-australia": {
    label: "Globe Asia Australia",
    icon: lazy("GlobeAsiaAustraliaIcon"),
  },
  "globe-europe-africa": {
    label: "Globe Europe Africa",
    icon: lazy("GlobeEuropeAfricaIcon"),
  },
  "hand-raised": {
    label: "Hand Raised",
    icon: lazy("HandRaisedIcon"),
  },
  "hand-thumb-down": {
    label: "Hand Thumb Down",
    icon: lazy("HandThumbDownIcon"),
  },
  "hand-thumb-up": {
    label: "Hand Thumb Up",
    icon: lazy("HandThumbUpIcon"),
  },
  hashtag: {
    label: "Hashtag",
    icon: lazy("HashtagIcon"),
  },
  heart: {
    label: "Heart",
    icon: lazy("HeartIcon"),
  },
  home: {
    label: "Home",
    icon: lazy("HomeIcon"),
  },
  "home-modern": {
    label: "Home Modern",
    icon: lazy("HomeModernIcon"),
  },
  identification: {
    label: "Identification",
    icon: lazy("IdentificationIcon"),
  },
  inbox: {
    label: "Inbox",
    icon: lazy("InboxIcon"),
  },
  "inbox-arrow-down": {
    label: "Inbox Arrow Down",
    icon: lazy("InboxArrowDownIcon"),
  },
  "inbox-stack": {
    label: "Inbox Stack",
    icon: lazy("InboxStackIcon"),
  },
  "information-circle": {
    label: "Information Circle",
    icon: lazy("InformationCircleIcon"),
  },
  key: {
    label: "Key",
    icon: lazy("KeyIcon"),
  },
  language: {
    label: "Language",
    icon: lazy("LanguageIcon"),
  },
  lifebuoy: {
    label: "Lifebuoy",
    icon: lazy("LifebuoyIcon"),
  },
  "light-bulb": {
    label: "Light Bulb",
    icon: lazy("LightBulbIcon"),
  },
  link: {
    label: "Link",
    icon: lazy("LinkIcon"),
  },
  "list-bullet": {
    label: "List Bullet",
    icon: lazy("ListBulletIcon"),
  },
  "lock-closed": {
    label: "Lock Closed",
    icon: lazy("LockClosedIcon"),
  },
  "lock-open": {
    label: "Lock Open",
    icon: lazy("LockOpenIcon"),
  },
  "magnifying-glass": {
    label: "Magnifying Glass",
    icon: lazy("MagnifyingGlassIcon"),
  },
  "magnifying-glass-circle": {
    label: "Magnifying Glass Circle",
    icon: lazy("MagnifyingGlassCircleIcon"),
  },
  "magnifying-glass-minus": {
    label: "Magnifying Glass Minus",
    icon: lazy("MagnifyingGlassMinusIcon"),
  },
  "magnifying-glass-plus": {
    label: "Magnifying Glass Plus",
    icon: lazy("MagnifyingGlassPlusIcon"),
  },
  map: {
    label: "Map",
    icon: lazy("MapIcon"),
  },
  "map-pin": {
    label: "Map Pin",
    icon: lazy("MapPinIcon"),
  },
  megaphone: {
    label: "Megaphone",
    icon: lazy("MegaphoneIcon"),
  },
  microphone: {
    label: "Microphone",
    icon: lazy("MicrophoneIcon"),
  },
  minus: {
    label: "Minus",
    icon: lazy("MinusIcon"),
  },
  "minus-circle": {
    label: "Minus Circle",
    icon: lazy("MinusCircleIcon"),
  },
  moon: {
    label: "Moon",
    icon: lazy("MoonIcon"),
  },
  "musical-note": {
    label: "Musical Note",
    icon: lazy("MusicalNoteIcon"),
  },
  newspaper: {
    label: "Newspaper",
    icon: lazy("NewspaperIcon"),
  },
  "no-symbol": {
    label: "No Symbol",
    icon: lazy("NoSymbolIcon"),
  },
  "paint-brush": {
    label: "Paint Brush",
    icon: lazy("PaintBrushIcon"),
  },
  "paper-airplane": {
    label: "Paper Airplane",
    icon: lazy("PaperAirplaneIcon"),
  },
  "paper-clip": {
    label: "Paper Clip",
    icon: lazy("PaperClipIcon"),
  },
  pause: {
    label: "Pause",
    icon: lazy("PauseIcon"),
  },
  "pause-circle": {
    label: "Pause Circle",
    icon: lazy("PauseCircleIcon"),
  },
  pencil: {
    label: "Pencil",
    icon: lazy("PencilIcon"),
  },
  "pencil-square": {
    label: "Pencil Square",
    icon: lazy("PencilSquareIcon"),
  },
  phone: {
    label: "Phone",
    icon: lazy("PhoneIcon"),
  },
  "phone-arrow-down-left": {
    label: "Phone Arrow Down Left",
    icon: lazy("PhoneArrowDownLeftIcon"),
  },
  "phone-arrow-up-right": {
    label: "Phone Arrow Up Right",
    icon: lazy("PhoneArrowUpRightIcon"),
  },
  "phone-x-mark": {
    label: "Phone X Mark",
    icon: lazy("PhoneXMarkIcon"),
  },
  photo: {
    label: "Photo",
    icon: lazy("PhotoIcon"),
  },
  play: {
    label: "Play",
    icon: lazy("PlayIcon"),
  },
  "play-circle": {
    label: "Play Circle",
    icon: lazy("PlayCircleIcon"),
  },
  "play-pause": {
    label: "Play Pause",
    icon: lazy("PlayPauseIcon"),
  },
  plus: {
    label: "Plus",
    icon: lazy("PlusIcon"),
  },
  "plus-circle": {
    label: "Plus Circle",
    icon: lazy("PlusCircleIcon"),
  },
  power: {
    label: "Power",
    icon: lazy("PowerIcon"),
  },
  "presentation-chart-bar": {
    label: "Presentation Chart Bar",
    icon: lazy("PresentationChartBarIcon"),
  },
  "presentation-chart-line": {
    label: "Presentation Chart Line",
    icon: lazy("PresentationChartLineIcon"),
  },
  printer: {
    label: "Printer",
    icon: lazy("PrinterIcon"),
  },
  "puzzle-piece": {
    label: "Puzzle Piece",
    icon: lazy("PuzzlePieceIcon"),
  },
  "qr-code": {
    label: "Qr Code",
    icon: lazy("QrCodeIcon"),
  },
  "question-mark-circle": {
    label: "Question Mark Circle",
    icon: lazy("QuestionMarkCircleIcon"),
  },
  "queue-list": {
    label: "Queue List",
    icon: lazy("QueueListIcon"),
  },
  radio: {
    label: "Radio",
    icon: lazy("RadioIcon"),
  },
  "receipt-percent": {
    label: "Receipt Percent",
    icon: lazy("ReceiptPercentIcon"),
  },
  "receipt-refund": {
    label: "Receipt Refund",
    icon: lazy("ReceiptRefundIcon"),
  },
  "rectangle-group": {
    label: "Rectangle Group",
    icon: lazy("RectangleGroupIcon"),
  },
  "rectangle-stack": {
    label: "Rectangle Stack",
    icon: lazy("RectangleStackIcon"),
  },
  "rocket-launch": {
    label: "Rocket Launch",
    icon: lazy("RocketLaunchIcon"),
  },
  rss: {
    label: "Rss",
    icon: lazy("RssIcon"),
  },
  scale: {
    label: "Scale",
    icon: lazy("ScaleIcon"),
  },
  scissors: {
    label: "Scissors",
    icon: lazy("ScissorsIcon"),
  },
  server: {
    label: "Server",
    icon: lazy("ServerIcon"),
  },
  "server-stack": {
    label: "Server Stack",
    icon: lazy("ServerStackIcon"),
  },
  share: {
    label: "Share",
    icon: lazy("ShareIcon"),
  },
  "shield-check": {
    label: "Shield Check",
    icon: lazy("ShieldCheckIcon"),
  },
  "shield-exclamation": {
    label: "Shield Exclamation",
    icon: lazy("ShieldExclamationIcon"),
  },
  "shopping-bag": {
    label: "Shopping Bag",
    icon: lazy("ShoppingBagIcon"),
  },
  "shopping-cart": {
    label: "Shopping Cart",
    icon: lazy("ShoppingCartIcon"),
  },
  signal: {
    label: "Signal",
    icon: lazy("SignalIcon"),
  },
  "signal-slash": {
    label: "Signal Slash",
    icon: lazy("SignalSlashIcon"),
  },
  sparkles: {
    label: "Sparkles",
    icon: lazy("SparklesIcon"),
  },
  "speaker-wave": {
    label: "Speaker Wave",
    icon: lazy("SpeakerWaveIcon"),
  },
  "speaker-x-mark": {
    label: "Speaker X Mark",
    icon: lazy("SpeakerXMarkIcon"),
  },
  "square2-stack": {
    label: "Square2 Stack",
    icon: lazy("Square2StackIcon"),
  },
  "square3-stack3d": {
    label: "Square3 Stack3d",
    icon: lazy("Square3Stack3DIcon"),
  },
  squares2x2: {
    label: "Squares2x2",
    icon: lazy("Squares2X2Icon"),
  },
  "squares-plus": {
    label: "Squares Plus",
    icon: lazy("SquaresPlusIcon"),
  },
  star: {
    label: "Star",
    icon: lazy("StarIcon"),
  },
  stop: {
    label: "Stop",
    icon: lazy("StopIcon"),
  },
  "stop-circle": {
    label: "Stop Circle",
    icon: lazy("StopCircleIcon"),
  },
  sun: {
    label: "Sun",
    icon: lazy("SunIcon"),
  },
  swatch: {
    label: "Swatch",
    icon: lazy("SwatchIcon"),
  },
  "table-cells": {
    label: "Table Cells",
    icon: lazy("TableCellsIcon"),
  },
  tag: {
    label: "Tag",
    icon: lazy("TagIcon"),
  },
  ticket: {
    label: "Ticket",
    icon: lazy("TicketIcon"),
  },
  trash: {
    label: "Trash",
    icon: lazy("TrashIcon"),
  },
  trophy: {
    label: "Trophy",
    icon: lazy("TrophyIcon"),
  },
  truck: {
    label: "Truck",
    icon: lazy("TruckIcon"),
  },
  tv: {
    label: "Tv",
    icon: lazy("TvIcon"),
  },
  user: {
    label: "User",
    icon: lazy("UserIcon"),
  },
  "user-circle": {
    label: "User Circle",
    icon: lazy("UserCircleIcon"),
  },
  "user-group": {
    label: "User Group",
    icon: lazy("UserGroupIcon"),
  },
  "user-minus": {
    label: "User Minus",
    icon: lazy("UserMinusIcon"),
  },
  "user-plus": {
    label: "User Plus",
    icon: lazy("UserPlusIcon"),
  },
  users: {
    label: "Users",
    icon: lazy("UsersIcon"),
  },
  variable: {
    label: "Variable",
    icon: lazy("VariableIcon"),
  },
  "video-camera": {
    label: "Video Camera",
    icon: lazy("VideoCameraIcon"),
  },
  "video-camera-slash": {
    label: "Video Camera Slash",
    icon: lazy("VideoCameraSlashIcon"),
  },
  "view-columns": {
    label: "View Columns",
    icon: lazy("ViewColumnsIcon"),
  },
  "viewfinder-circle": {
    label: "Viewfinder Circle",
    icon: lazy("ViewfinderCircleIcon"),
  },
  wallet: {
    label: "Wallet",
    icon: lazy("WalletIcon"),
  },
  wifi: {
    label: "Wifi",
    icon: lazy("WifiIcon"),
  },
  window: {
    label: "Window",
    icon: lazy("WindowIcon"),
  },
  wrench: {
    label: "Wrench",
    icon: lazy("WrenchIcon"),
  },
  "wrench-screwdriver": {
    label: "Wrench Screwdriver",
    icon: lazy("WrenchScrewdriverIcon"),
  },
  "x-circle": {
    label: "X Circle",
    icon: lazy("XCircleIcon"),
  },
  "x-mark": {
    label: "X Mark",
    icon: lazy("XMarkIcon"),
  },
} as const;
