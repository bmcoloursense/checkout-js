import { CheckoutSelectors, CheckoutService, LanguageService } from '@bigcommerce/checkout-sdk';

export default interface CheckoutButtonProps {
    methodId: string;
    containerId: string;
    checkoutService: CheckoutService;
    checkoutState: CheckoutSelectors;
    checkoutButtonContainerClass?: string;
    language: LanguageService;
    onUnhandledError(error: Error): void;
    onWalletButtonClick(methodName: string): void;
}
