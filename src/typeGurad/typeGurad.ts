export function result() {
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
