import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import axios from "axios";

import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import MDInput from "components/MDInput";

import MDBox from "components/MDBox";

function transformString(inputString: string): string {
  // Split the input string into an array of substrings
  const substrings = inputString.split("/");

  // Reverse the array of substrings
  const reversedArray = substrings.reverse();

  // Join the reversed array into a string using '-' as the separator
  const resultString = reversedArray.join("-");

  return resultString;
}
const View = (props: any) => {
  const { setOpendialog, data } = props;
  const handleClosedialog = () => {
    setOpendialog(false);
  };

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      loan_amount: data.loan_amount,

      repayment_date: "",
      repayment_amount: "",
      employee_name: data.employee_name,

      loan_name: data.manage_loan_name,
      paid_through_account: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values, action) => {
      const sendData = {
        employee_name: values.employee_name,

        loan_name: values.loan_name,
        loan_amount: values.loan_amount,

        loan_repay_date: transformString(values.repayment_date),

        repayment_amount: values.repayment_amount,
        paid_through_account: values.paid_through_account,
      };
      axios.post("http://10.0.20.133:8000/loans_child", sendData, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNzAwMTEwMzQ0fQ.yXoGAiYrgE55zEyiYpkacryNrZxp-TLiYgpV4_gVCTI",
        },
      });
      handleClosedialog();

      action.resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <MDBox p={4}>
        <Grid container>
          <Grid item sm={4}>
            <MDTypography variant="h6">Employee Name</MDTypography>
          </Grid>
          <Grid item sm={6} mb={2}>
            <MDInput
              sx={{ width: "45%" }}
              variant="standard"
              name="employee_name"
              value={values.employee_name}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item sm={4}>
            <MDTypography variant="h6">Loan Name</MDTypography>
          </Grid>
          <Grid item sm={6} mb={2}>
            <MDInput
              sx={{ width: "45%" }}
              variant="standard"
              name="loan_name"
              value={values.loan_name}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid item sm={4}>
            <MDTypography variant="h6">Loan Amount</MDTypography>
          </Grid>
          <Grid item sm={6} mb={2}>
            <MDInput
              sx={{ width: "45%" }}
              variant="standard"
              name="loan_amount"
              type="number"
              value={values.loan_amount}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid item sm={4}>
            <MDTypography variant="h6">Repayment Date</MDTypography>
          </Grid>
          <Grid item sm={6} mb={2}>
            <MDInput
              sx={{ width: "45%" }}
              variant="standard"
              name="repayment_date"
              type="date"
              value={values.repayment_date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item sm={4}>
            <MDTypography variant="h6">Repayment Amount</MDTypography>
          </Grid>
          <Grid item sm={6} mb={2}>
            <MDInput
              sx={{ width: "45%" }}
              variant="standard"
              name="repayment_amount"
              type="number"
              value={values.repayment_amount}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item sm={4}>
            <MDTypography variant="h6">Paid through account</MDTypography>
          </Grid>
          <Grid item sm={6} mb={2}>
            <MDInput
              sx={{ width: "45%" }}
              variant="standard"
              name="paid_through_account"
              value={values.paid_through_account}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid container sm={12}>
            <Grid mt={4}>
              <MDButton
                color="primary"
                variant="outlined"
                onClick={() => {
                  handleClosedialog();
                }}
              >
                Cancel
              </MDButton>
            </Grid>
            <Grid ml={2} mt={4}>
              <MDButton color="info" variant="contained" type="submit">
                Save
              </MDButton>
            </Grid>
          </Grid>
        </Grid>
      </MDBox>
    </form>
  );
};

export default View;
