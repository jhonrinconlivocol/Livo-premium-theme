document.addEventListener('DOMContentLoaded', () => {

const bundleOptions = document.querySelectorAll(
'.lp-bundle-option input[type="radio"]'
);

const hiddenVariantInput = document.querySelector(
'form[action="/cart/add"] input[name="id"]'
);

const currentPrice = document.querySelector(
'[data-current-price]'
);

const comparePrice = document.querySelector(
'[data-compare-price]'
);

const savePrice = document.querySelector(
'[data-price-save]'
);

const dailyPrice = document.querySelector(
'[data-daily-price]'
);

bundleOptions.forEach(option => {

```
option.addEventListener('change', () => {

  const variantId =
    option.dataset.variantId;

  const price =
    parseInt(option.dataset.variantPrice || 0);

  const compare =
    parseInt(option.dataset.variantCompare || 0);

  if (
    hiddenVariantInput &&
    variantId
  ) {
    hiddenVariantInput.value =
      variantId;
  }

  if (currentPrice) {

    currentPrice.textContent =
      Shopify.formatMoney(price);
  }

  if (
    comparePrice &&
    compare > price
  ) {

    comparePrice.textContent =
      Shopify.formatMoney(compare);
  }

  if (
    savePrice &&
    compare > price
  ) {

    savePrice.textContent =
      'Ahorra ' +
      Shopify.formatMoney(
        compare - price
      );
  }

  if (dailyPrice) {

    dailyPrice.textContent =
      'Menos de ' +
      Shopify.formatMoney(
        Math.round(price / 30)
      ) +
      ' al día';
  }

});
```

});

});
