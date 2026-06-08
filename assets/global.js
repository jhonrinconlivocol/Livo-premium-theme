document.addEventListener('DOMContentLoaded', () => {

const bundleOptions = document.querySelectorAll(
'.lp-bundle-option input[type="radio"]'
);

const hiddenVariantInput = document.querySelector(
'form[action="/cart/add"] input[name="id"]'
);

bundleOptions.forEach(option => {

```
option.addEventListener('change', () => {

  const variantId =
    option.dataset.variantId;

  if (
    hiddenVariantInput &&
    variantId
  ) {
    hiddenVariantInput.value =
      variantId;
  }

});
```

});

});
