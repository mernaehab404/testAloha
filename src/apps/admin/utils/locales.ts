import { groupedTranslations, trans } from "@mongez/localization";
import mainTranslation from "shared/localization/index.json";

export { mainTranslation };

groupedTranslations(mainTranslation);

export function the(key: string) {
  return trans("the", { key: trans(key) });
}

// Add only common localization
groupedTranslations({
  the: {
    en: ":key",
    ar: "ال:key",
  },
  projectName: {
    en: "Project Name",
    ar: "اسم المشروع",
  },
  savingSettings: {
    en: "Saving settings...",
    ar: "جاري حفظ الإعدادات...",
  },
  doormanPhoneNumber: {
    en: "Doorman Phone Number",
    ar: "رقم هاتف البواب",
  },
  searchedProperties: {
    en: "Searched Properties",
    ar: "الوحدآت الأكثر بحثاً",
  },
  statistics: {
    en: "Statistics",
    ar: "إحصائيات",
  },
  doorman: {
    en: "Doorman",
    ar: "البواب",
  },
  updatePropertiesPrice: {
    en: "Update Properties Price",
    ar: "تحديث سعر الوحدات",
  },
  quickCreate: {
    en: "Quick Create",
    ar: "إنشاء سريع",
  },
  createNewProperty: {
    en: "Create New Property",
    ar: "إنشاء وحدة جديدة",
  },
  updatePrice: {
    en: "Update Price",
    ar: "تحديث السعر",
  },
  modal: {
    en: "Modal",
    ar: "نموذج",
  },
  youShouldNoteThatRateByPercentage: {
    en: "You should note that the rate is by percentage",
    ar: "يجب تذكيرك أن المعدل هو بالنسبة المئوية",
  },
  rate: {
    en: "Rate",
    ar: "المعدل",
  },
  notFound: {
    en: "Not Found",
    ar: "غير موجود",
  },
  statisticsToday: {
    en: "Statistics For Most Viewed Today",
    ar: "إحصئيات الأكثر مشاهدةً اليوم",
  },
  isTaken: {
    en: "Is Taken",
    ar: "مستحوذ عليها",
  },
  brokerName: {
    en: "Broker Name",
    ar: "إسم السمسار",
  },
  review: {
    en: "Review",
    ar: "التعليق",
  },
  social: {
    en: "Social",
    ar: "التواصل الاجتماعي",
  },
  post: {
    en: "Post",
    ar: "مقال",
  },
  footerLogo: {
    en: "Footer Logo",
    ar: "شعار الفوتر",
  },
  sortOrder: {
    en: "Sort Order",
    ar: "ترتيب العرض",
  },
  sortOrderHint: {
    en: "The lower the number, the higher the item will be displayed",
    ar: "كلما كان الرقم أقل، كلما كان العنصر أعلى في العرض",
  },
  people: {
    en: "People",
    ar: "الأشخاص",
  },
  building: {
    en: "Building",
    ar: "المبنى",
  },
  datesSettings: {
    en: "Dates Settings",
    ar: "إعدادات التواريخ",
  },
  deliveryDate: {
    en: "Delivery Date",
    ar: "تاريخ التسليم",
  },
  deliveryDateDescription: {
    en: "The date when the property will be delivered to the customer",
    ar: "تاريخ تسليم الوحدة للعميل",
  },
  availableDate: {
    en: "Available Date",
    ar: "تاريخ التوفر",
  },
  availableDateDescription: {
    en: "The date when the property will be available for sale or rent",
    ar: "تاريخ توفر الوحدة للبيع أو الإيجار",
  },
  takenDate: {
    en: "Taken Date",
    ar: "تاريخ الحجز",
  },
  takenDateDescription: {
    en: "The date when the property has been taken",
    ar: "تاريخ حجز الوحدة",
  },
  installment: {
    en: "Installment",
    ar: "التقسيط",
  },
  installmentPrice: {
    en: "Installment Price",
    ar: "سعر التقسيط",
  },
  installmentDownPayment: {
    en: "Installment Down Payment",
    ar: "مقدم التأمين",
  },
  installmentPaymentAmount: {
    en: "Installment Payment Amount",
    ar: "قيمة القسط",
  },
  installmentDownPaymentHint: {
    en: "The amount of money that will be paid as down payment",
    ar: "مبلغ مقدم التأمين",
  },
  installmentPaymentAmountHint: {
    en: "The amount of money that will be paid every installment",
    ar: "مبلغ قيمة القسط خلال المدة",
  },
  installmentPaymentPeriod: {
    en: "Installment Payment Period (In Months)",
    ar: "مدة التقسيط (بالشهور)",
  },
  installmentNumberOfPayments: {
    en: "Number Of Payments",
    ar: "عدد الأقساط",
  },
  installmentYears: {
    en: "Installment Years",
    ar: "سنوات التقسيط",
  },
  admin: {
    en: "admin",
    ar: "مسؤول",
  },
  aboutHint: {
    en: "About section will be shown in the footer of the website",
    ar: "سيتم عرض قسم عن في فوتر الموقع",
  },
  primaryColor: {
    en: "Primary Color",
    ar: "اللون الأساسي",
  },
  briefHint: {
    en: "Brief section will be shown in the footer of the website below the logo",
    ar: "سيتم عرض قسم الملخص في فوتر الموقع أسفل الشعار",
  },
  brief: {
    en: "Brief",
    ar: "الملخص",
  },
  inquiries: {
    en: "Inquiries",
    ar: "الاستفسارات",
  },
  inquiry: {
    en: "Inquiry",
    ar: "استفسار",
  },
  placeholderImage: {
    en: "Placeholder Image",
    ar: "صورة الوضع الاحتياطي",
  },
  placeholderImageHint: {
    en: "This image will be shown while the image is being loaded or in case of error",
    ar: "سيتم عرض هذه الصورة أثناء تحميل الصورة أو في حالة وجود خطأ",
  },
  bio: {
    en: "Bio",
    ar: "السيرة الذاتية",
  },
  about: {
    en: "About",
    ar: "عن",
  },
  settingsSaved: {
    en: "Settings saved successfully",
    ar: "تم حفظ الإعدادات بنجاح",
  },
  testimonials: {
    en: "Testimonials",
    ar: "الشهادات",
  },
  testimonial: {
    en: "Testimonial",
    ar: "شهادة",
  },
  updateItem: {
    en: "Update :item",
    ar: "تحديث بيانات :item",
  },
  metaTitleHint: {
    en: "If not set, it will be taken from the name field",
    ar: "إذا لم يتم تعيينه، سيتم الحصول عليه من حقل الاسم",
  },
  metaDescriptionHint: {
    en: "If not set, it will be taken from the short description field",
    ar: "إذا لم يتم تعيينه، سيتم الحصول عليه من حقل الوصف المختصر",
  },
  metaKeywordsHint: {
    en: "If not set, it will be taken from the name field, separate each keyword with a comma",
    ar: "إذا لم يتم تعيينه، سيتم الحصول عليه من حقل الاسم، افصل كل كلمة مفتاحية بفاصلة",
  },
  agents: {
    en: "Agents",
    ar: "الوكلاء",
  },
  developers: {
    en: "Developers",
    ar: "المطورين",
  },
  rentTitle: {
    en: "Rent title",
    ar: "عنوان الإيجار",
  },
  saleTitle: {
    en: "Sale title",
    ar: "عنوان البيع",
  },
  saleShortDescription: {
    en: "Sale short description",
    ar: "وصف البيع",
  },
  rentShortDescription: {
    en: "Rent short description",
    ar: "وصف الإيجار",
  },
  keywords: {
    en: "Keywords",
    ar: "الكلمات الدليلية",
  },
  property: {
    en: "Property",
    ar: "وحدة",
  },
  createItem: {
    en: "Create new :item",
    ar: "إنشاء :item جديد",
  },
  noData: {
    en: "No data found",
    ar: "لا يوجد بيانات",
  },
  deleteBulk: {
    en: "Delete (:count)",
    ar: "حذف (:count)",
  },
  confirmBulkRows: {
    en: "Are you sure you want to delete (:count) selected rows?",
    ar: "هل أنت متأكد من حذف (:count) الصفوف المحددة؟",
  },
  bulkDeleteHeading: {
    en: "Bulk Delete Confirm",
    ar: "تأكيد حذف متعدد",
  },
  cancelDelete: {
    en: "No don't delete it",
    ar: "لا، لا تحذفه",
  },
  confirmDelete: {
    en: "Yes, delete it",
    ar: "تأكيد الحذف",
  },
  singleDeleteHeading: {
    en: "Delete Confirm",
    ar: "تأكيد الحذف",
  },
  deleting: {
    en: "Deleting...",
    ar: "جاري الحذف...",
  },
  deletingInProgress: {
    en: "Deleting in progress...",
    ar: "جاري الحذف...",
  },
  success: {
    en: "Success",
    ar: "تمت العملية بنجاح",
  },
  deleteSuccess: {
    en: "Delete Operation has been done successfully",
    ar: "تمت عملية الحذف بنجاح",
  },
  deleteError: {
    en: "Error while deleting",
    ar: "حدث خطأ أثناء الحذف",
  },
  group: {
    en: "Group",
    ar: "مجموعة",
  },
  isAdmin: {
    en: "Is Admin",
    ar: "مدير",
  },
  isOwner: {
    en: "Is Owner",
    ar: "مالك",
  },
  isAgent: {
    en: "Is Agent",
    ar: "وكيل",
  },
  isDeveloper: {
    en: "Is Developer",
    ar: "مطور",
  },
  deleteItem: {
    en: "Delete :item",
    ar: "حذف :item",
  },
  loading: {
    en: "Loading...",
    ar: "جار التحميل...",
  },
  login: {
    en: "Login",
    ar: "تسجيل الدخول",
  },
  confirmInput: {
    en: "Confirm :input",
    ar: "تأكيد :input",
  },
  confirm: {
    en: "Confirm",
    ar: "تأكيد",
  },
  phonNumber: {
    en: "Phone Number",
    ar: "رقم الهاتف",
  },
  confirmDeleteMessage: {
    en: "Are you sure you want to delete this record? This action is destructive and can not be restored.",
    ar: "هل أنت متأكد من أنك تريد حذف هذا السجل؟ هذا الإجراء غير قابل للتراجع عنه ولا يمكن إعادته.",
  },
  resetPassword: {
    en: "Reset Password",
    ar: "إسترجاع كلمة المرور",
  },
  backToLogin: {
    en: "Back To Login",
    ar: "الرجوع لصفحة تسجيل الدخول",
  },
  direction: {
    en: "Direction",
    ar: "الإتجاه",
  },
  theme: {
    en: "Theme",
    ar: "التصميم",
  },
  light: {
    en: "Light",
    ar: "فاتح",
  },
  dark: {
    en: "Dark",
    ar: "داكن",
  },
  enterEmail: {
    en: "Enter your Phone Number Or Email",
    ar: "ادخل البريد الالكتروني او رقم الهاتف",
  },
  settings: {
    en: "Settings",
    ar: "الإعدادات",
  },
  accountSettings: {
    en: "Account Settings",
    ar: "إعدادات الحسآب",
  },
  ChangeAccount: {
    en: "Change Account",
    ar: "تغيير الحسآب",
  },
  logout: {
    en: "Logout",
    ar: "تسجيل الخروج",
  },
  logoutSuccessMessage: {
    en: "You have been logged out successfully",
    ar: "لقد تم تسجيل الخروج بنجاح",
  },
  language: {
    en: "Language",
    ar: "اللغة",
  },
  enterPass: {
    en: "Enter your password",
    ar: "ادخل كلمة المرور",
  },
  forgotPassword: {
    en: "Forgot Password?",
    ar: "نسيت كلمة المرور",
  },
  dashboard: {
    en: "Dashboard",
    ar: "الرئيسية",
  },
  somethingWentWrong: {
    en: "Something Went wrong, please try again later.",
    ar: "حدث خطأ ما, من فضلك حاول مرة أخرى في وقت لاحق.",
  },
  categories: {
    en: "Categories",
    ar: "الأقسام",
  },
  category: {
    en: "Category",
    ar: "القسم",
  },
  analysis: {
    en: "Analysis",
    ar: "التحليلات",
  },
  administrators: {
    en: "Administrators",
    ar: "المسؤولين",
  },
  administrator: {
    en: "Administrator",
    ar: "المسؤول",
  },
  errorHeading: {
    en: "Error!",
    ar: "خطأ!",
  },
  accessDenied: {
    en: "Access Denied!",
    ar: "غير مصرح لك بدخول هذه الصفحة!",
  },
  notFoundPage: {
    en: "Not Found Page",
    ar: "الصفحة المطلوبة غير موجودة",
  },
  minimizeScreen: {
    en: "Minimize Screen",
    ar: "تصغير الشاشة",
  },
  maximizeScreen: {
    en: "Maximize Screen",
    ar: "تكبير الشاشة",
  },
  unreadMessages: {
    en: "Unread Messages",
    ar: "رسائل غير مقروءة",
  },
  youHave: {
    en: "You have",
    ar: "لديك",
  },
  clickOrDarg: {
    en: "Click Or darg and drop file to upload",
    ar: "اضغط او أسحب الملف",
  },
  dragAndDropToSort: {
    en: "Drag and drop to sort items",
    ar: "اسحب وأفلت لترتيب العناصر",
  },
  propertyModels: {
    en: "Property Models",
    ar: "نماذج العقارات",
  },
  nearByPlaces: {
    en: "Near By Places",
    ar: "الأماكن المجاورة",
  },
  displayAgentOnCard: {
    en: "Display Agent On Card",
    ar: "عرض الوكيل في الكارت",
  },
  addDomain: {
    en: "Add Domain",
    ar: "إضافة الدومين",
  },
  addDomainHint: {
    en: "If set to true, the domain will be added as watermark in the center of the image.",
    ar: "إذا تم تعيينه على صحيح، سيتم إضافة الدومين كعلامة مائية في وسط الصورة.",
  },
  baseCurrency: {
    en: "Base Currency",
    ar: "العملة الأساسية",
  },
  brokerNamePhoneNumber: {
    en: "Broker Name & Phone Number",
    ar: "إسم السمسار ورقم الهاتف",
  },
  propertyFinishing: {
    en: "Property Finishing",
    ar: "تشطيب العقار",
  },
  propertyFinishings: {
    en: "Property Finishings",
    ar: "تشطيبات العقار",
  },
  finishing: {
    en: "Finishing",
    ar: "التشطيب",
  },
  baseCurrencyHint: {
    en: "The currency that will be used to conevrt all other currencies baed on the exchange rate, base currency value must always be 1",
    ar: "العملة التي سيتم استخدامها لتحويل جميع العملات الأخرى بناءً على سعر الصرف، قيمة العملة الأساسية يجب أن تكون دائمًا 1",
  },
  defaultCurrencyHint: {
    en: "The currency that will be used to display prices in the website",
    ar: "العملة التي سيتم استخدامها لعرض الأسعار في الموقع",
  },
  propertyCurrencyHint: {
    en: "If set, then the property price will always be displayed in this currency",
    ar: "إذا تم تعيينه، فسيتم عرض سعر العقار دائمًا بهذه العملة",
  },
  googleMapCountry: {
    en: "Google Map Country Restriction",
    ar: "تقييد الدولة في خريطة جوجل",
  },
  googleMapCountryHint: {
    en: "If set, the map will be restricted to this country only",
    ar: "إذا تم تعيينه، سيتم تقييد الخريطة لهذه الدولة فقط",
  },
  disableWatermark: {
    en: "Disable Watermark",
    ar: "تعطيل العلامة المائية",
  },
  builtUpArea: {
    en: "Built Up Area",
    ar: "مساحة البناء",
  },
  account: {
    en: "Account",
    ar: "الحساب",
  },
  autoActivateAccount: {
    en: "Auto Activate Account",
    ar: "تفعيل الحساب تلقائياً",
  },
  watermark: {
    en: "Watermark",
    ar: "العلامة المائية",
  },
  landArea: {
    en: "Land Area",
    ar: "مساحة الأرض",
  },
  roofArea: {
    en: "Roof Area",
    ar: "مساحة السطح",
  },
  garageArea: {
    en: "Garage Area",
    ar: "مساحة المرآب",
  },
  gardenArea: {
    en: "Garden Area",
    ar: "مساحة الحديقة",
  },
  propertyFurnishings: {
    en: "Property Furnishings",
    ar: "تجهيزات العقارات",
  },
  furnishing: {
    en: "Furnishing",
    ar: "نوع التجهيز",
  },
  model: {
    en: "Model",
    ar: "النموذج",
  },
  rooms: {
    en: "Rooms",
    ar: "الغرف",
  },
  filtersOff: {
    en: "Filters Off",
    ar: "اخفاء الفلتر",
  },
  filtersOn: {
    en: "Filters On",
    ar: "إظهار الفلتر",
  },
  agent: {
    en: "Agent",
    ar: "الوكيل",
  },
  watermarkMaxSize: {
    en: "Watermark Max Size",
    ar: "حجم العلامة المائية",
  },
  sheet: {
    en: "Sheet",
    ar: "الشيت",
  },
  age: {
    en: "Age",
    ar: "عمر",
  },
  copyRight: {
    en: "Copy Right Reversed",
    ar: "حقوق النشر محفوظة",
  },
  propertyFeatures: {
    en: "Property Features",
    ar: "مميزات العقار",
  },
  propertyFeature: {
    en: "Property Feature",
    ar: "ميزة العقار",
  },
});
