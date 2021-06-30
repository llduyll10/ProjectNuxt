import { wrapFunctional } from './utils'

export { default as BannerDetails } from '../../components/BannerDetails.vue'
export { default as BannerHomeAid } from '../../components/BannerHomeAid.vue'
export { default as BannerInfo } from '../../components/BannerInfo.vue'
export { default as Block1 } from '../../components/Block1.vue'
export { default as Block2 } from '../../components/Block2.vue'
export { default as Carousel } from '../../components/Carousel.vue'
export { default as Company } from '../../components/Company.vue'
export { default as CompanyQuote } from '../../components/CompanyQuote.vue'
export { default as CompanyQuoteCompanyDeal } from '../../components/CompanyQuoteCompanyDeal.vue'
export { default as CompanyQuoteOwner } from '../../components/CompanyQuoteOwner.vue'
export { default as Customer } from '../../components/Customer.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as FormProject } from '../../components/FormProject.vue'
export { default as Header } from '../../components/Header.vue'
export { default as HomeAidNav } from '../../components/HomeAidNav.vue'
export { default as InputFile } from '../../components/InputFile.vue'
export { default as Loading } from '../../components/Loading.vue'
export { default as Market } from '../../components/Market.vue'
export { default as Modal } from '../../components/Modal.vue'
export { default as NewSiderbar } from '../../components/NewSiderbar.vue'
export { default as Pagination } from '../../components/Pagination.vue'
export { default as ReceiveInfo } from '../../components/ReceiveInfo.vue'
export { default as DetailPayment } from '../../components/detailPayment.vue'
export { default as DetailPaymentCompany } from '../../components/detailPaymentCompany.vue'
export { default as QuoteForm } from '../../components/quote/form.vue'
export { default as ProfileAccount } from '../../components/profile/account.vue'
export { default as ProfileDes } from '../../components/profile/des.vue'
export { default as ProfileInfo } from '../../components/profile/info.vue'
export { default as ProfileManage } from '../../components/profile/manage.vue'
export { default as ProfileManageCustomer } from '../../components/profile/manageCustomer.vue'
export { default as ProfileMenu } from '../../components/profile/menu.vue'
export { default as ProfileProject } from '../../components/profile/project.vue'
export { default as ProfileRating } from '../../components/profile/rating.vue'
export { default as PopupAddBankAccount } from '../../components/popup/addBankAccount.vue'
export { default as PopupBankTransferSelect } from '../../components/popup/bankTransferSelect.vue'
export { default as PopupDealUpdate } from '../../components/popup/dealUpdate.vue'
export { default as PopupInforProject } from '../../components/popup/inforProject.vue'
export { default as PopupLienhe } from '../../components/popup/lienhe.vue'
export { default as PopupLienheform } from '../../components/popup/lienheform.vue'
export { default as PopupPhoneform } from '../../components/popup/phoneform.vue'
export { default as PopupSurvey } from '../../components/popup/survey.vue'
export { default as PopupSurveyContact } from '../../components/popup/surveyContact.vue'
export { default as PopupSurveyCustomerContact } from '../../components/popup/surveyCustomerContact.vue'
export { default as PopupSurveyUpdate } from '../../components/popup/surveyUpdate.vue'
export { default as PopupViewSurvey } from '../../components/popup/viewSurvey.vue'
export { default as PopupVilla } from '../../components/popup/villa.vue'
export { default as ProfileContractorComplete } from '../../components/profile/contractor/complete.vue'
export { default as ProfileContractorContent } from '../../components/profile/contractor/content.vue'
export { default as ProfileContractorDeploy } from '../../components/profile/contractor/deploy.vue'
export { default as ProfileContractorNegotiate } from '../../components/profile/contractor/negotiate.vue'
export { default as ProfileContractorQuotes } from '../../components/profile/contractor/quotes.vue'
export { default as ProfileCustomerComplete } from '../../components/profile/customer/complete.vue'
export { default as ProfileCustomerContent } from '../../components/profile/customer/content.vue'
export { default as ProfileCustomerDeploy } from '../../components/profile/customer/deploy.vue'
export { default as ProfileCustomerNegotiate } from '../../components/profile/customer/negotiate.vue'
export { default as ProfileCustomerQuotes } from '../../components/profile/customer/quotes.vue'
export { default as ProfileEditCompany } from '../../components/profile/edit/company.vue'
export { default as ProfileEditConfirm } from '../../components/profile/edit/confirm.vue'
export { default as ProfileEditPersonal } from '../../components/profile/edit/personal.vue'
export { default as ProfileEditProject } from '../../components/profile/edit/project.vue'
export { default as ProfileEditWork } from '../../components/profile/edit/work.vue'
export { default as ProfileFinanceBankAccount } from '../../components/profile/finance/bankAccount.vue'
export { default as ProfileFinanceBuy } from '../../components/profile/finance/buy.vue'
export { default as ProfileFinanceHistory } from '../../components/profile/finance/history.vue'
export { default as ProfileFinanceManage } from '../../components/profile/finance/manage.vue'
export { default as ProfileFinanceRequest } from '../../components/profile/finance/request.vue'
export { default as PopupPaymentCreateReport } from '../../components/popup/payment/createReport.vue'
export { default as PopupPaymentCreateRequired } from '../../components/popup/payment/createRequired.vue'
export { default as PopupPaymentCustomerCreateReport } from '../../components/popup/paymentCustomer/createReport.vue'
export { default as PopupPaymentCustomerCreateRequired } from '../../components/popup/paymentCustomer/createRequired.vue'

export const LazyBannerDetails = import('../../components/BannerDetails.vue' /* webpackChunkName: "components/banner-details" */).then(c => wrapFunctional(c.default || c))
export const LazyBannerHomeAid = import('../../components/BannerHomeAid.vue' /* webpackChunkName: "components/banner-home-aid" */).then(c => wrapFunctional(c.default || c))
export const LazyBannerInfo = import('../../components/BannerInfo.vue' /* webpackChunkName: "components/banner-info" */).then(c => wrapFunctional(c.default || c))
export const LazyBlock1 = import('../../components/Block1.vue' /* webpackChunkName: "components/block1" */).then(c => wrapFunctional(c.default || c))
export const LazyBlock2 = import('../../components/Block2.vue' /* webpackChunkName: "components/block2" */).then(c => wrapFunctional(c.default || c))
export const LazyCarousel = import('../../components/Carousel.vue' /* webpackChunkName: "components/carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyCompany = import('../../components/Company.vue' /* webpackChunkName: "components/company" */).then(c => wrapFunctional(c.default || c))
export const LazyCompanyQuote = import('../../components/CompanyQuote.vue' /* webpackChunkName: "components/company-quote" */).then(c => wrapFunctional(c.default || c))
export const LazyCompanyQuoteCompanyDeal = import('../../components/CompanyQuoteCompanyDeal.vue' /* webpackChunkName: "components/company-quote-company-deal" */).then(c => wrapFunctional(c.default || c))
export const LazyCompanyQuoteOwner = import('../../components/CompanyQuoteOwner.vue' /* webpackChunkName: "components/company-quote-owner" */).then(c => wrapFunctional(c.default || c))
export const LazyCustomer = import('../../components/Customer.vue' /* webpackChunkName: "components/customer" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyFormProject = import('../../components/FormProject.vue' /* webpackChunkName: "components/form-project" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeAidNav = import('../../components/HomeAidNav.vue' /* webpackChunkName: "components/home-aid-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyInputFile = import('../../components/InputFile.vue' /* webpackChunkName: "components/input-file" */).then(c => wrapFunctional(c.default || c))
export const LazyLoading = import('../../components/Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const LazyMarket = import('../../components/Market.vue' /* webpackChunkName: "components/market" */).then(c => wrapFunctional(c.default || c))
export const LazyModal = import('../../components/Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const LazyNewSiderbar = import('../../components/NewSiderbar.vue' /* webpackChunkName: "components/new-siderbar" */).then(c => wrapFunctional(c.default || c))
export const LazyPagination = import('../../components/Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
export const LazyReceiveInfo = import('../../components/ReceiveInfo.vue' /* webpackChunkName: "components/receive-info" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailPayment = import('../../components/detailPayment.vue' /* webpackChunkName: "components/detail-payment" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailPaymentCompany = import('../../components/detailPaymentCompany.vue' /* webpackChunkName: "components/detail-payment-company" */).then(c => wrapFunctional(c.default || c))
export const LazyQuoteForm = import('../../components/quote/form.vue' /* webpackChunkName: "components/quote-form" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileAccount = import('../../components/profile/account.vue' /* webpackChunkName: "components/profile-account" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileDes = import('../../components/profile/des.vue' /* webpackChunkName: "components/profile-des" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileInfo = import('../../components/profile/info.vue' /* webpackChunkName: "components/profile-info" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileManage = import('../../components/profile/manage.vue' /* webpackChunkName: "components/profile-manage" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileManageCustomer = import('../../components/profile/manageCustomer.vue' /* webpackChunkName: "components/profile-manage-customer" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileMenu = import('../../components/profile/menu.vue' /* webpackChunkName: "components/profile-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileProject = import('../../components/profile/project.vue' /* webpackChunkName: "components/profile-project" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileRating = import('../../components/profile/rating.vue' /* webpackChunkName: "components/profile-rating" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupAddBankAccount = import('../../components/popup/addBankAccount.vue' /* webpackChunkName: "components/popup-add-bank-account" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupBankTransferSelect = import('../../components/popup/bankTransferSelect.vue' /* webpackChunkName: "components/popup-bank-transfer-select" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupDealUpdate = import('../../components/popup/dealUpdate.vue' /* webpackChunkName: "components/popup-deal-update" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupInforProject = import('../../components/popup/inforProject.vue' /* webpackChunkName: "components/popup-infor-project" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupLienhe = import('../../components/popup/lienhe.vue' /* webpackChunkName: "components/popup-lienhe" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupLienheform = import('../../components/popup/lienheform.vue' /* webpackChunkName: "components/popup-lienheform" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupPhoneform = import('../../components/popup/phoneform.vue' /* webpackChunkName: "components/popup-phoneform" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupSurvey = import('../../components/popup/survey.vue' /* webpackChunkName: "components/popup-survey" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupSurveyContact = import('../../components/popup/surveyContact.vue' /* webpackChunkName: "components/popup-survey-contact" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupSurveyCustomerContact = import('../../components/popup/surveyCustomerContact.vue' /* webpackChunkName: "components/popup-survey-customer-contact" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupSurveyUpdate = import('../../components/popup/surveyUpdate.vue' /* webpackChunkName: "components/popup-survey-update" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupViewSurvey = import('../../components/popup/viewSurvey.vue' /* webpackChunkName: "components/popup-view-survey" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupVilla = import('../../components/popup/villa.vue' /* webpackChunkName: "components/popup-villa" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileContractorComplete = import('../../components/profile/contractor/complete.vue' /* webpackChunkName: "components/profile-contractor-complete" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileContractorContent = import('../../components/profile/contractor/content.vue' /* webpackChunkName: "components/profile-contractor-content" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileContractorDeploy = import('../../components/profile/contractor/deploy.vue' /* webpackChunkName: "components/profile-contractor-deploy" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileContractorNegotiate = import('../../components/profile/contractor/negotiate.vue' /* webpackChunkName: "components/profile-contractor-negotiate" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileContractorQuotes = import('../../components/profile/contractor/quotes.vue' /* webpackChunkName: "components/profile-contractor-quotes" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileCustomerComplete = import('../../components/profile/customer/complete.vue' /* webpackChunkName: "components/profile-customer-complete" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileCustomerContent = import('../../components/profile/customer/content.vue' /* webpackChunkName: "components/profile-customer-content" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileCustomerDeploy = import('../../components/profile/customer/deploy.vue' /* webpackChunkName: "components/profile-customer-deploy" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileCustomerNegotiate = import('../../components/profile/customer/negotiate.vue' /* webpackChunkName: "components/profile-customer-negotiate" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileCustomerQuotes = import('../../components/profile/customer/quotes.vue' /* webpackChunkName: "components/profile-customer-quotes" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileEditCompany = import('../../components/profile/edit/company.vue' /* webpackChunkName: "components/profile-edit-company" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileEditConfirm = import('../../components/profile/edit/confirm.vue' /* webpackChunkName: "components/profile-edit-confirm" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileEditPersonal = import('../../components/profile/edit/personal.vue' /* webpackChunkName: "components/profile-edit-personal" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileEditProject = import('../../components/profile/edit/project.vue' /* webpackChunkName: "components/profile-edit-project" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileEditWork = import('../../components/profile/edit/work.vue' /* webpackChunkName: "components/profile-edit-work" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileFinanceBankAccount = import('../../components/profile/finance/bankAccount.vue' /* webpackChunkName: "components/profile-finance-bank-account" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileFinanceBuy = import('../../components/profile/finance/buy.vue' /* webpackChunkName: "components/profile-finance-buy" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileFinanceHistory = import('../../components/profile/finance/history.vue' /* webpackChunkName: "components/profile-finance-history" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileFinanceManage = import('../../components/profile/finance/manage.vue' /* webpackChunkName: "components/profile-finance-manage" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileFinanceRequest = import('../../components/profile/finance/request.vue' /* webpackChunkName: "components/profile-finance-request" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupPaymentCreateReport = import('../../components/popup/payment/createReport.vue' /* webpackChunkName: "components/popup-payment-create-report" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupPaymentCreateRequired = import('../../components/popup/payment/createRequired.vue' /* webpackChunkName: "components/popup-payment-create-required" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupPaymentCustomerCreateReport = import('../../components/popup/paymentCustomer/createReport.vue' /* webpackChunkName: "components/popup-payment-customer-create-report" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupPaymentCustomerCreateRequired = import('../../components/popup/paymentCustomer/createRequired.vue' /* webpackChunkName: "components/popup-payment-customer-create-required" */).then(c => wrapFunctional(c.default || c))
