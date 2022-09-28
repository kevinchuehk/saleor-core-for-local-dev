/* eslint-disable */

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "DeliveryMethod": [
      "Warehouse",
      "ShippingMethod"
    ],
    "Event": [
      "AddressCreated",
      "AddressDeleted",
      "AddressUpdated",
      "AppDeleted",
      "AppInstalled",
      "AppStatusChanged",
      "AppUpdated",
      "AttributeCreated",
      "AttributeDeleted",
      "AttributeUpdated",
      "AttributeValueCreated",
      "AttributeValueDeleted",
      "AttributeValueUpdated",
      "CategoryCreated",
      "CategoryDeleted",
      "CategoryUpdated",
      "ChannelCreated",
      "ChannelDeleted",
      "ChannelStatusChanged",
      "ChannelUpdated",
      "CheckoutCreated",
      "CheckoutFilterShippingMethods",
      "CheckoutUpdated",
      "CollectionCreated",
      "CollectionDeleted",
      "CollectionUpdated",
      "CustomerCreated",
      "CustomerUpdated",
      "DraftOrderCreated",
      "DraftOrderDeleted",
      "DraftOrderUpdated",
      "FulfillmentApproved",
      "FulfillmentCanceled",
      "FulfillmentCreated",
      "GiftCardCreated",
      "GiftCardDeleted",
      "GiftCardStatusChanged",
      "GiftCardUpdated",
      "InvoiceDeleted",
      "InvoiceRequested",
      "InvoiceSent",
      "MenuCreated",
      "MenuDeleted",
      "MenuItemCreated",
      "MenuItemDeleted",
      "MenuItemUpdated",
      "MenuUpdated",
      "OrderCancelled",
      "OrderConfirmed",
      "OrderCreated",
      "OrderFilterShippingMethods",
      "OrderFulfilled",
      "OrderFullyPaid",
      "OrderUpdated",
      "PageCreated",
      "PageDeleted",
      "PageTypeCreated",
      "PageTypeDeleted",
      "PageTypeUpdated",
      "PageUpdated",
      "PaymentAuthorize",
      "PaymentCaptureEvent",
      "PaymentConfirmEvent",
      "PaymentListGateways",
      "PaymentProcessEvent",
      "PaymentRefundEvent",
      "PaymentVoidEvent",
      "PermissionGroupCreated",
      "PermissionGroupDeleted",
      "PermissionGroupUpdated",
      "ProductCreated",
      "ProductDeleted",
      "ProductUpdated",
      "ProductVariantBackInStock",
      "ProductVariantCreated",
      "ProductVariantDeleted",
      "ProductVariantOutOfStock",
      "ProductVariantUpdated",
      "SaleCreated",
      "SaleDeleted",
      "SaleToggle",
      "SaleUpdated",
      "ShippingListMethodsForCheckout",
      "ShippingPriceCreated",
      "ShippingPriceDeleted",
      "ShippingPriceUpdated",
      "ShippingZoneCreated",
      "ShippingZoneDeleted",
      "ShippingZoneUpdated",
      "StaffCreated",
      "StaffDeleted",
      "StaffUpdated",
      "TransactionActionRequest",
      "TranslationCreated",
      "TranslationUpdated",
      "VoucherCreated",
      "VoucherDeleted",
      "VoucherUpdated",
      "WarehouseCreated",
      "WarehouseDeleted",
      "WarehouseUpdated"
    ],
    "IssuingPrincipal": [
      "App",
      "User"
    ],
    "Job": [
      "AppInstallation",
      "ExportFile",
      "Invoice"
    ],
    "Node": [
      "Address",
      "Allocation",
      "App",
      "AppExtension",
      "AppInstallation",
      "AppToken",
      "Attribute",
      "AttributeTranslatableContent",
      "AttributeTranslation",
      "AttributeValue",
      "AttributeValueTranslatableContent",
      "AttributeValueTranslation",
      "Category",
      "CategoryTranslatableContent",
      "CategoryTranslation",
      "Channel",
      "Checkout",
      "CheckoutLine",
      "Collection",
      "CollectionChannelListing",
      "CollectionTranslatableContent",
      "CollectionTranslation",
      "CustomerEvent",
      "DigitalContent",
      "DigitalContentUrl",
      "EventDelivery",
      "EventDeliveryAttempt",
      "ExportEvent",
      "ExportFile",
      "Fulfillment",
      "FulfillmentLine",
      "GiftCard",
      "GiftCardEvent",
      "GiftCardTag",
      "Group",
      "Invoice",
      "Menu",
      "MenuItem",
      "MenuItemTranslatableContent",
      "MenuItemTranslation",
      "Order",
      "OrderDiscount",
      "OrderEvent",
      "OrderLine",
      "Page",
      "PageTranslatableContent",
      "PageTranslation",
      "PageType",
      "Payment",
      "Product",
      "ProductChannelListing",
      "ProductMedia",
      "ProductTranslatableContent",
      "ProductTranslation",
      "ProductType",
      "ProductVariant",
      "ProductVariantChannelListing",
      "ProductVariantTranslatableContent",
      "ProductVariantTranslation",
      "Sale",
      "SaleChannelListing",
      "SaleTranslatableContent",
      "SaleTranslation",
      "ShippingMethod",
      "ShippingMethodChannelListing",
      "ShippingMethodPostalCodeRule",
      "ShippingMethodTranslatableContent",
      "ShippingMethodTranslation",
      "ShippingMethodType",
      "ShippingZone",
      "ShopTranslation",
      "StaffNotificationRecipient",
      "Stock",
      "Transaction",
      "TransactionEvent",
      "TransactionItem",
      "User",
      "Voucher",
      "VoucherChannelListing",
      "VoucherTranslatableContent",
      "VoucherTranslation",
      "Warehouse",
      "Webhook"
    ],
    "ObjectWithMetadata": [
      "App",
      "Attribute",
      "Category",
      "Checkout",
      "CheckoutLine",
      "Collection",
      "DigitalContent",
      "Fulfillment",
      "GiftCard",
      "Invoice",
      "Menu",
      "MenuItem",
      "Order",
      "OrderLine",
      "Page",
      "PageType",
      "Payment",
      "Product",
      "ProductType",
      "ProductVariant",
      "Sale",
      "ShippingMethod",
      "ShippingMethodType",
      "ShippingZone",
      "TransactionItem",
      "User",
      "Voucher",
      "Warehouse"
    ],
    "TranslatableItem": [
      "ProductTranslatableContent",
      "CollectionTranslatableContent",
      "CategoryTranslatableContent",
      "AttributeTranslatableContent",
      "AttributeValueTranslatableContent",
      "ProductVariantTranslatableContent",
      "PageTranslatableContent",
      "ShippingMethodTranslatableContent",
      "SaleTranslatableContent",
      "VoucherTranslatableContent",
      "MenuItemTranslatableContent"
    ],
    "TranslationTypes": [
      "ProductTranslation",
      "CollectionTranslation",
      "CategoryTranslation",
      "AttributeTranslation",
      "AttributeValueTranslation",
      "ProductVariantTranslation",
      "PageTranslation",
      "ShippingMethodTranslation",
      "SaleTranslation",
      "VoucherTranslation",
      "MenuItemTranslation"
    ],
    "_Entity": [
      "App",
      "Address",
      "User",
      "Group",
      "ProductVariant",
      "Product",
      "ProductType",
      "Collection",
      "Category",
      "ProductMedia",
      "PageType"
    ]
  }
};
      export default result;
    