export function typeGuard() {
  interface TransactionCallbackPayload {
    data: {
      amount: number;
      description: string;
    };
  }

  interface TransactionFailedCallbackPayload {
    error: {
      error_message: string;
      error_details: string;
    };
  }

  // Type predicates - a function that return type such as "payload is TransactionCallbackPayload"
  // const isSuccessCallbackPayload = (
  //   payload: TransactionCallbackPayload | TransactionFailedCallbackPayload
  // ): payload is TransactionCallbackPayload => {
  //   return (payload as TransactionCallbackPayload).data !== undefined;
  // };

  // const sendPayload = (
  //   payload: TransactionCallbackPayload | TransactionFailedCallbackPayload
  // ) => {
  //   // payload&& payload.data
  //   if (isSuccessCallbackPayload(payload)) {
  //     // Handle success case
  //     console.log("payload data", payload.data);
  //   } else {
  //     // Handle failed case
  //     console.log("payload error", payload.error);
  //   }
  // };

  const sendPayload = (
    payload: TransactionCallbackPayload | TransactionFailedCallbackPayload
  ) => {
    // payload.data
    //   if (payload.data) {
    if ("data" in payload) {
      // Handle success case
      console.log("payload data", payload.data);
    } else {
      // Handle failed case
      console.log("payload error", payload.error);
    }
  };

  // Call the function with a TransactionCallbackPayload
  const successPayload = {
    data: {
      amount: 100,
      description: "Payment for services rendered",
    },
  };
  sendPayload(successPayload);

  // Call the function with a TransactionFailedCallbackPayload
  const errorPayload = {
    error: {
      error_message: "Internal server error",
      error_details: "Something went wrong on the server",
    },
  };
  sendPayload(errorPayload);
}

// Need of Type Guard
function formatAmount(money: number | string) {
  // parseInt accepts only string
  // let formattedAmount = "Rs. " + parseInt(money); //ERROR
  // console.log(formattedAmount);
  // return formattedAmount;
}
// formatAmount(12)

//------ Type Guard ------//
// solution using typeof
function formatAmount1(money: number | string) {
  let formattedAmount: string;
  // below if condition will act as type guard
  if (typeof money == "string") {
    formattedAmount = "Rs. " + parseInt(money);
  } else {
    formattedAmount = "Rs. " + money + 1;
  }
  console.log(formattedAmount);
  return formattedAmount;
}
// formatAmount1("12") // "Rs. 12"
// formatAmount1(12) // "Rs. 121"
