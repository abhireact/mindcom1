import MDInput from "components/MDInput";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "components/MDButton";
import axios from "axios";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import FormField from "layouts/ecommerce/products/new-product/components/FormField";
import { useEffect, useState } from "react";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import React from "react";

const states = [
  "SELECT STATE",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi (National Capital Territory of Delhi)",
  "Puducherry",
  "Ladakh",
  "Lakshadweep",
];
interface AdditionalSlab {
  key: number;
  start_range: number;
  end_range: number;
  monthly_tax_amount: number;
}

interface DataItem {
  location_name: string;
  state: string;
  pt_number: string;
  deduction_cycle: string;
  start_range: number[];
  end_range: number[];
  monthly_tax_amount: number[];
}

const data: DataItem = {
  location_name: "Narsimha Laxmi ",
  state: "Karnataka",
  pt_number: "8809077",
  deduction_cycle: "Yearly",
  start_range: [1, 4],
  end_range: [24999, 24999],
  monthly_tax_amount: [0, 1],
};

const Updates = () => {
  const task = {
    location_name: "Narsimha Laxmi ",
    state: "Karnataka",
    pt_number: "8809077",
    deduction_cycle: "Yearly",
    start_range: [1, 4],
    end_range: [24999, 24999],
    monthly_tax_amount: [0, 1],
  };
  console.log("data ", task);

  // Create initialSlab based on the matchingState or use an empty array
  const initialSlab: AdditionalSlab[] = data.start_range.map((start, index) => ({
    key: Date.now(),
    start_range: start,
    end_range: data.end_range[index],
    monthly_tax_amount: data.monthly_tax_amount[index],
  }));

  console.log(initialSlab);
  const removeTaxSlab = (index: number) => {
    if (additionalSlabs.length > 1) {
      const updatedSlabs = [...additionalSlabs];
      updatedSlabs.splice(index, 1);
      setAdditionalSlabs(updatedSlabs);
    }
  };

  console.log(task, "task");

  const [additionalSlabs, setAdditionalSlabs] = useState<AdditionalSlab[]>(initialSlab);

  // Function to add a new set of tax slabs
  const addTaxSlab = () => {
    setAdditionalSlabs((prevSlabs) => [
      ...prevSlabs,
      {
        key: Date.now(),
        start_range: 0,
        end_range: 0,
        monthly_tax_amount: 0,
      },
    ]);
  };
  const handleAdditionalSlabChange = (key: number, field: keyof AdditionalSlab, value: string) => {
    setAdditionalSlabs((prevSlabs) => {
      return prevSlabs.map((slab) => {
        if (slab.key === key) {
          return {
            ...slab,
            [field]: value,
          };
        }
        return slab;
      });
    });
  };

  const formik = useFormik({
    initialValues: {
      name: task.location_name,

      state: task.state,

      pt_number: task.pt_number,
      deduction_cycle: task.deduction_cycle,
    },
    onSubmit: (values, action) => {
      //   console.log(values, "values");

      const taxSlabsData = additionalSlabs.map((slab) => ({
        start_range: slab.start_range,
        end_range: slab.end_range,
        monthly_tax_amount: slab.monthly_tax_amount,
      }));
      const requestData = {
        location_name: values.name,
        pt_number: values.pt_number,
        deduction_cycle: values.deduction_cycle,
        start_range: [...taxSlabsData.map((slab) => slab.start_range)],
        end_range: [...taxSlabsData.map((slab) => slab.end_range)],
        monthly_tax_amount: [...taxSlabsData.map((slab) => slab.monthly_tax_amount)],
      };

      axios
        .put("http://10.0.20.133:8000/professional_tax", requestData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNzAxMjMzNjYzfQ.CSwzxYBeBMoy4LoGQ3AO1LeagMFvHsxSaVX68HsjbSU`,
          },
        })
        .then((response) => {
          console.log("it is working", response);
          //window.location.reload();
        })
        .catch((error) => {
          console.log("error is occurred", error);
        });
      console.log(values);

      action.resetForm();
    },
  });

  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <MDBox p={4}>
          <Grid container spacing={2}>
            <Grid sm={12}>
              <MDTypography sx={{ fontSize: 14 }} variant="span">
                Taxes slabs based on
              </MDTypography>

              <MDTypography sx={{ fontSize: 14, fontWeight: "bold" }} ml={1} variant="span">
                Monthly Salary
              </MDTypography>
            </Grid>
            <Grid container sx={{ fontSize: 14 }}>
              <Grid sm={4}>Start Range (₹)</Grid>

              <Grid sm={4}>End Range (₹)</Grid>

              <Grid sm={4}>Monthly Tax Amount (₹)</Grid>
              {additionalSlabs.map((slab, index) => (
                <React.Fragment key={slab.key}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <MDInput
                        name={`start_range_${index}`}
                        value={slab.start_range}
                        onChange={(e: { target: { value: any } }) =>
                          handleAdditionalSlabChange(slab.key, "start_range", e.target.value)
                        }
                        sx={{ width: "80%" }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <MDInput
                        name={`end_range_${index}`}
                        a
                        value={slab.end_range}
                        onChange={(e: { target: { value: any } }) =>
                          handleAdditionalSlabChange(slab.key, "end_range", e.target.value)
                        }
                        sx={{ width: "80%" }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <MDInput
                        name={`monthly_tax_amount_${index}`}
                        value={slab.monthly_tax_amount}
                        onChange={(e: { target: { value: any } }) =>
                          handleAdditionalSlabChange(slab.key, "monthly_tax_amount", e.target.value)
                        }
                        sx={{ width: "80%" }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <MDButton variant="text" color="error" onClick={() => removeTaxSlab(index)}>
                        Remove Slab
                      </MDButton>
                    </Grid>
                  </Grid>
                </React.Fragment>
              ))}
              <Grid item xs={12}>
                <MDButton variant="text" color="info" onClick={addTaxSlab}>
                  + Additional Slabs
                </MDButton>
              </Grid>
            </Grid>
          </Grid>
        </MDBox>
      </form>
    </Card>
  );
};

export default Updates;
