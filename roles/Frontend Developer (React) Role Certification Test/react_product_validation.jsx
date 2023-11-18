import React, { useState } from "react";
import "./index.css";

function ProductValidation() {
  const [productName, setProductName] = useState();
  const [productQuantity, setProductQuantity] = useState();

  return (
    <div className="layout-column justify-contents-center align-items-center">
      <section className="card pa-50">
        <form className="layout-column" noValidate>
          <label>
            <input
              type="text"
              value={productName}
              data-testid="name-input"
              className={`white large outlined ${
                productName === "" && "error"
              }`}
              placeholder="Product name"
              onInput={(e) => {
                console.log(
                  "name:",
                  e.currentTarget.value,
                  e.currentTarget.value === ""
                );
                setProductName(e.currentTarget.value);
              }}
            />
            {productName === "" && (
              <p
                className="error-text form-hint"
                data-testid="name-input-error"
              >
                Product name is required
              </p>
            )}
          </label>
          <label>
            <input
              type="number"
              data-testid="quantity-input"
              value={productQuantity}
              className={`white large outlined ${
                productQuantity === "" && "error"
              }`}
              placeholder="Quantity"
              onInput={(e) => {
                console.log("quantity:", e.currentTarget.value);
                setProductQuantity(e.currentTarget.value);
              }}
            />
            {productQuantity === "" && (
              <p
                className="error-text form-hint"
                data-testid="quantity-input-error"
              >
                Quantity is required
              </p>
            )}
          </label>
          <button
            className="mt-50"
            type="submit"
            data-testid="submit-button"
            disabled={!productName || !productQuantity}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default ProductValidation;
