import MDInput from "components/MDInput";
import { useFormik } from "formik";
import * as yup from "yup";
import MDButton from "components/MDButton";
import axios from "axios";
import Card from "@mui/material/Card";

import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { TreeSelect } from "antd";
import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";

const selectData = {
  gender: ["Male", "Female"],

  balance_to_be_displayed: [
    "Current Date",
    "Accural period leave",
    "Start Date of Leave Request",
    "Year end estimatted balance ",
  ],
  halfday: ["Full Day", "1st Half", "2nd Half"],
  weekday: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  date: ["1st", "2nd", "3rd"],
  payCycle: ["Monthly", "Weekly", "BiWeekly", "HalfMonthly"],
};

const Updateshift = (props: any) => {
  const { setOpenupdate, editData } = props;
  const { SHOW_PARENT } = TreeSelect;

  const [value, setValue] = useState([""]);
  const [treeData, setTreeData] = useState([]);

  console.log(value, "value");
  const onChange = (newValue: string[]) => {
    setValue(newValue);
  };
  const handleCloseupdate = () => {
    setOpenupdate(false);
  };

  useEffect(() => {
    axios
      .get("http://10.0.20.133:8000/shifts/tree_data", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNjk3Nzc2NTMwLCJhZG1pbiI6dHJ1ZX0.PWQQOV6bj7uCVyqjG7NjGrZ0CR6GVGUivWOjmy9vCSk`,
        },
      })
      .then((response) => {
        setTreeData(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Please select",
    style: {
      width: "100%",
    },
  };

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      shift_name: editData.shift_name,
      start_from: editData.start_from,
      to_time: editData.to_time,
      shift_margin: "",
      hours_befor_shift: "",
      hours_after_shift: "",
      weekend: "",
      Halfworkingday: "",
      shift_allowance: "",

      Sunday: [] as string[],
      SundayMain: [] as string[],
      Monday: [] as string[],
      Tuesday: [] as string[],
      Wednesday: [] as string[],
      Thursaday: [] as string[],
      Friday: [] as string[],
      Saturday: [] as string[],
      MainSaturday: [] as string[],
      MainSunday: [] as string[],
      MainMonday: [] as string[],
      MainTuesDay: [] as string[],
      MainWednesDay: [] as string[],
      MainThursday: [] as string[],
      MainFriday: [] as string[],
      Autocomplete1: "",
      Autocomplete2: "",
      Autocomplete3: "",
      Autocomplete4: "",
      Autocomplete5: "",
      Autocomplete6: "",
      Autocomplete7: "",
      Autocomplete8: "",
      Autocomplete9: "",
      Autocomplete10: "",
      Autocomplete11: "",
      Autocomplete12: "",
      Autocomplete13: "",
      Autocomplete14: "",
      Autocomplete15: "",
      Autocomplete16: "",
      Autocomplete17: "",
      Autocomplete18: "",
      Autocomplete19: "",
      Autocomplete20: "",
      Autocomplete21: "",
      Autocomplete22: "",
      Autocomplete23: "",
      Autocomplete24: "",
      Autocomplete25: "",
      Autocomplete26: "",
      Autocomplete27: "",
      Autocomplete28: "",
      Autocomplete29: "",
      Autocomplete30: "",
      Autocomplete31: "",
      Autocomplete32: "",
      Autocomplete33: "",
      Autocomplete34: "",
      Autocomplete35: "",
      Autocomplete36: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values, action) => {
      const formValues = {
        shift_name: values.shift_name,
        start_from: values.start_from,
        to_time: values.to_time,
        shift_margin: values.shift_margin === "Enable" ? true : false,
        hours_befor_shift: values.hours_befor_shift,
        hours_after_shift: values.hours_after_shift,
        weekend: values.weekend,
        applicable_for: value,
        half_working_and_half_weekend: values.Halfworkingday === "Enable" ? true : false,
        weekend_defination: JSON.stringify({
          Sunday: values.Sunday,
          SundayMain: values.SundayMain,
          Monday: values.Monday,
          Tuesday: values.Tuesday,
          Wednesday: values.Wednesday,
          Thursaday: values.Thursaday,
          Friday: values.Friday,
          Saturday: values.Saturday,
          MainSaturday: values.MainSaturday,
          MainSunday: values.MainSunday,
          MainMonday: values.MainMonday,
          MainTuesDay: values.MainTuesDay,
          MainWednesDay: values.MainWednesDay,
          MainThursday: values.MainThursday,
          MainFriday: values.MainFriday,
          Autocomplete1: values.Autocomplete1,
          Autocomplete2: values.Autocomplete2,
          Autocomplete3: values.Autocomplete3,
          Autocomplete4: values.Autocomplete4,
          Autocomplete5: values.Autocomplete5,
          Autocomplete6: values.Autocomplete6,
          Autocomplete7: values.Autocomplete7,
          Autocomplete8: values.Autocomplete8,
          Autocomplete9: values.Autocomplete9,
          Autocomplete10: values.Autocomplete10,
          Autocomplete11: values.Autocomplete11,
          Autocomplete12: values.Autocomplete12,
          Autocomplete13: values.Autocomplete13,
          Autocomplete14: values.Autocomplete14,
          Autocomplete15: values.Autocomplete15,
          Autocomplete16: values.Autocomplete16,
          Autocomplete17: values.Autocomplete17,
          Autocomplete18: values.Autocomplete18,
          Autocomplete19: values.Autocomplete19,
          Autocomplete20: values.Autocomplete20,
          Autocomplete21: values.Autocomplete21,
          Autocomplete22: values.Autocomplete22,
          Autocomplete23: values.Autocomplete23,
          Autocomplete24: values.Autocomplete24,
          Autocomplete25: values.Autocomplete25,
          Autocomplete26: values.Autocomplete26,
          Autocomplete27: values.Autocomplete27,
          Autocomplete28: values.Autocomplete28,
          Autocomplete29: values.Autocomplete29,
          Autocomplete30: values.Autocomplete30,
          Autocomplete31: values.Autocomplete31,
          Autocomplete32: values.Autocomplete32,
          Autocomplete33: values.Autocomplete33,
          Autocomplete34: values.Autocomplete34,
          Autocomplete35: values.Autocomplete35,
          Autocomplete36: values.Autocomplete36,
        }),
      };
      axios.put("http://10.0.20.133:8000/shifts", formValues, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNjk3Nzc2NTMwLCJhZG1pbiI6dHJ1ZX0.PWQQOV6bj7uCVyqjG7NjGrZ0CR6GVGUivWOjmy9vCSk`,
        },
      });

      action.resetForm();
    },
  });

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <MDBox p={4}>
          <Grid container>
            <Grid sm={3}>
              <MDTypography ml={15} variant="h5">
                Shift Name
              </MDTypography>
            </Grid>
            <Grid sm={7}>
              <MDInput
                sx={{ width: 500 }}
                // id="email"
                variant="standard"
                name="shift_name"
                value={values.shift_name}
                onChange={handleChange}
                onBlur={handleBlur}
                mb={10}
                mt={10}
              />
            </Grid>
            <Grid sm={3}>
              <MDTypography ml={15} variant="h5">
                From
              </MDTypography>
            </Grid>

            <Grid sm={7}>
              <MDInput
                sx={{ width: 500 }}
                type="time"
                variant="standard"
                name="start_from"
                value={values.start_from}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.start_from && Boolean(errors.start_from)}
                helperText={touched.start_from && errors.start_from}
                mb={10}
              />
            </Grid>

            <Grid sm={3}>
              <MDTypography ml={15} variant="h5">
                To
              </MDTypography>
            </Grid>
            <Grid sm={7}>
              <MDInput
                sx={{ width: 500 }}
                // id="password"
                type="time"
                variant="standard"
                name="to_time"
                value={values.to_time}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.to_time && Boolean(errors.to_time)}
                helperText={touched.to_time && errors.to_time}
                mb={10}
              />
            </Grid>

            <Grid sm={6}>
              {" "}
              <MDTypography ml={15} variant="h5">
                Shift Margin
              </MDTypography>
            </Grid>
            <Grid sm={6}>
              <FormControl>
                <RadioGroup>
                  <FormControlLabel
                    control={
                      <Radio
                        checked={values.shift_margin.includes("Enable")}
                        onChange={handleChange}
                        name="shift_margin"
                        value="Enable"
                      />
                    }
                    label={<MDTypography variant="body2">Enable</MDTypography>}
                  />
                  <FormControlLabel
                    // value="male"
                    control={
                      <Radio
                        checked={values.shift_margin.includes("Disable")}
                        onChange={handleChange}
                        name="shift_margin"
                        value="Disable"
                      />
                    }
                    label={<MDTypography variant="body2"> Disable</MDTypography>}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            {values.shift_margin === "Enable" && (
              <Grid container>
                <Grid sm={12}>
                  <MDInput
                    type="text"
                    placeholder="hh:mm"
                    onChange={handleChange}
                    values={values.hours_after_shift}
                    name="hours_after_shift"
                  />
                </Grid>

                <Grid sm={12}>
                  <MDInput
                    type="text"
                    placeholder="hh:mm"
                    onChange={handleChange}
                    values={values.hours_befor_shift}
                    name="hours_befor_shift"
                  />
                </Grid>
              </Grid>
            )}
            <Grid container>
              <Grid sm={6}>
                <MDTypography ml={15} variant="h5">
                  Weekend
                </MDTypography>
              </Grid>
              <Grid sm={6}>
                <FormControl>
                  <RadioGroup>
                    <FormControlLabel
                      control={
                        <Radio
                          checked={values.weekend.includes("weekend:Location")}
                          onChange={handleChange}
                          name="weekend"
                          value="weekend:Location"
                        />
                      }
                      label={<MDTypography variant="body2">Location Based</MDTypography>}
                    />

                    <FormControlLabel
                      control={
                        <Radio
                          checked={values.weekend.includes("weekend:Shift")}
                          onChange={handleChange}
                          name="weekend"
                          value="weekend:Shift"
                        />
                      }
                      label={<MDTypography variant="body2"> Shift Based</MDTypography>}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            {values.weekend === "weekend:Shift" && (
              <Grid container>
                <Grid sm={6}>
                  <MDTypography ml={15} variant="h5">
                    Half working day & half weekend
                  </MDTypography>
                </Grid>
                <Grid sm={6}>
                  <FormControl>
                    <RadioGroup>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={values.Halfworkingday.includes("Enable")}
                            onChange={handleChange}
                            name="Halfworkingday"
                            value="Enable"
                          />
                        }
                        label={<MDTypography variant="body2">Enable</MDTypography>}
                      />

                      <FormControlLabel
                        control={
                          <Radio
                            checked={values.Halfworkingday.includes("Disable")}
                            onChange={handleChange}
                            name="Halfworkingday"
                            value="Disable"
                          />
                        }
                        label={<MDTypography variant="body2"> Disable</MDTypography>}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid pt={5} sm={12}>
                  <MDTypography variant="h5">Weekend definition</MDTypography>
                </Grid>
                <Grid container spacing={3} sm={12} mt={"10%"} pl={3}>
                  <Grid sm={1.2}>
                    <MDTypography></MDTypography>
                  </Grid>
                  <Grid sm={1.8}>
                    <MDTypography>All</MDTypography>
                  </Grid>
                  <Grid sm={1.8}>
                    <MDTypography>1st</MDTypography>
                  </Grid>
                  <Grid sm={1.8}>
                    <MDTypography>2nd</MDTypography>
                  </Grid>
                  <Grid sm={1.8}>
                    <MDTypography>3rd</MDTypography>
                  </Grid>
                  <Grid sm={1.8}>
                    <MDTypography>4th</MDTypography>
                  </Grid>
                  <Grid sm={1.8}>
                    <MDTypography>5th</MDTypography>
                  </Grid>
                  <Grid sm={1.2}>
                    <MDTypography>Sunday</MDTypography>
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Sunday.includes("All")}
                          onChange={handleChange}
                          name="Sunday"
                          value="All"
                        />
                      }
                      label=""
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    {/* ... */}
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Sunday.includes("1st Sunday")}
                          onChange={handleChange}
                          name="Sunday"
                          value="1st Sunday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Sunday?.includes("1st Sunday")) {
                                newvalue = "1st Sunday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainSunday.includes(newvalue);

                                // Update MainSunday array
                                const updatedMainSunday = [...values.MainSunday, newvalue];

                                handleChange({
                                  target: { name: "MainSunday", value: updatedMainSunday },
                                });
                                handleChange({ target: { name: "Autocomplete1", newvalue } });
                              }
                            }}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete1"
                                onChange={handleChange}
                                value={values.Autocomplete1}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    {/* <Checkbox defaultChecked /> */}
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Sunday.includes("2nd Sunday")}
                          onChange={handleChange}
                          name="Sunday"
                          value="2nd Sunday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Sunday?.includes("2nd Sunday")) {
                                newvalue = "2nd Sunday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainSunday.includes(newvalue);

                                // Update MainSunday array
                                const updatedMainSunday = [...values.MainSunday, newvalue];

                                handleChange({
                                  target: { name: "MainSunday", value: updatedMainSunday },
                                });
                                handleChange({ target: { name: "Autocomplete2", newvalue } });
                              }
                            }}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete2"
                                onChange={handleChange}
                                value={values.Autocomplete2}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    {/* ... */}
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Sunday.includes("3rd Sunday")}
                          onChange={handleChange}
                          name="Sunday"
                          value="3rd Sunday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Sunday?.includes("3rd Sunday")) {
                                newvalue = "3rd Sunday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainSunday.includes(newvalue);

                                // Update MainSunday array
                                const updatedMainSunday = [...values.MainSunday, newvalue];

                                handleChange({
                                  target: { name: "MainSunday", value: updatedMainSunday },
                                });
                                handleChange({ target: { name: "Autocomplete3", newvalue } });
                              }
                            }}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete3"
                                onChange={handleChange}
                                value={values.Autocomplete3}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    {/* <Checkbox defaultChecked /> */}
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Sunday.includes("4th Sunday")}
                          onChange={handleChange}
                          name="Sunday"
                          value="4th Sunday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Sunday?.includes("4th Sunday")) {
                                newvalue = "4th Sunday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainSunday.includes(newvalue);

                                // Update MainSunday array
                                const updatedMainSunday = [...values.MainSunday, newvalue];

                                handleChange({
                                  target: { name: "MainSunday", value: updatedMainSunday },
                                });
                                handleChange({ target: { name: "Autocomplete4", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete4"
                                onChange={handleChange}
                                value={values.Autocomplete4}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    {/* <Checkbox defaultChecked /> */}
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Sunday.includes("5th Sunday")}
                          onChange={handleChange}
                          name="Sunday"
                          value="5th Sunday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Sunday?.includes("5th Sunday")) {
                                newvalue = "5th Sunday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainSunday.includes(newvalue);

                                // Update MainSunday array
                                const updatedMainSunday = [...values.MainSunday, newvalue];

                                handleChange({
                                  target: { name: "MainSunday", value: updatedMainSunday },
                                });
                                handleChange({ target: { name: "Autocomplete5", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete5"
                                onChange={handleChange}
                                value={values.Autocomplete5}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.2}>
                    <MDTypography>Monday</MDTypography>
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Monday.includes("Full Day")}
                          onChange={handleChange}
                          name="Monday"
                          value="Full Day"
                        />
                      }
                      label=""
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Monday.includes("1st Monday")}
                          onChange={handleChange}
                          name="Monday"
                          value="1st Monday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Monday?.includes("1st Monday")) {
                                newvalue = "1st Monday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainMonday.includes(newvalue);

                                // Update MainMonday array
                                const updatedMainMonday = [...values.MainMonday, newvalue];

                                handleChange({
                                  target: { name: "MainMonday", value: updatedMainMonday },
                                });
                                handleChange({ target: { name: "Autocomplete6", newvalue } });
                              }
                            }}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete6"
                                value={values.Autocomplete6}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Monday.includes("2nd Monday")}
                          onChange={handleChange}
                          name="Monday"
                          value="2nd Monday"
                        />
                      }
                      label={
                        // console.log(values.Monday[1], "value of 2nd mon")
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Monday?.includes("2nd Monday")) {
                                newvalue = "2nd Monday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainMonday.includes(newvalue);

                                // Update MainMonday array
                                const updatedMainMonday = [...values.MainMonday, newvalue];

                                handleChange({
                                  target: { name: "MainMonday", value: updatedMainMonday },
                                });
                                handleChange({ target: { name: "Autocomplete7", newvalue } });
                              }
                            }}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete7"
                                value={values.Autocomplete7}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Monday.includes("3rd Monday")}
                          onChange={handleChange}
                          name="Monday"
                          value="3rd Monday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Monday?.includes("3rd Monday")) {
                                newvalue = "3rd Monday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainMonday.includes(newvalue);

                                // Update MainMonday array
                                const updatedMainMonday = [...values.MainMonday, newvalue];

                                handleChange({
                                  target: { name: "MainMonday", value: updatedMainMonday },
                                });
                                handleChange({ target: { name: "Autocomplete8", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete8"
                                onChange={handleChange}
                                value={values.Autocomplete8}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Monday.includes("4th Monday")}
                          onChange={handleChange}
                          name="Monday"
                          value="4th Monday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Monday?.includes("4th Monday")) {
                                newvalue = "4th Monday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainMonday.includes(newvalue);

                                // Update MainMonday array
                                const updatedMainMonday = [...values.MainMonday, newvalue];

                                handleChange({
                                  target: { name: "MainMonday", value: updatedMainMonday },
                                });
                                handleChange({ target: { name: "Autocomplete9", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete9"
                                onChange={handleChange}
                                value={values.Autocomplete9}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Monday.includes("5th Monday")}
                          onChange={handleChange}
                          name="Monday"
                          value="5th Monday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Monday?.includes("5th Monday")) {
                                newvalue = "5th Monday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainMonday.includes(newvalue);

                                // Update MainMonday array
                                const updatedMainMonday = [...values.MainMonday, newvalue];

                                handleChange({
                                  target: { name: "MainMonday", value: updatedMainMonday },
                                });
                                handleChange({ target: { name: "Autocomplete10", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete10"
                                onChange={handleChange}
                                value={values.Autocomplete10}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.2}>
                    <MDTypography>Tuesday</MDTypography>
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Tuesday.includes("Full Day")}
                          onChange={handleChange}
                          name="Tuesday"
                          value="Full Day"
                        />
                      }
                      label=""
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Tuesday.includes("1st Tuesday")}
                          onChange={handleChange}
                          name="Tuesday"
                          value="1st Tuesday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Tuesday?.includes("1st Tuesday")) {
                                newvalue = "1st Tuesday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainTuesDay.includes(newvalue);

                                // Update MainTuesDay array
                                const updatedMainTuesDay = [...values.MainTuesDay, newvalue];

                                handleChange({
                                  target: { name: "MainTuesDay", value: updatedMainTuesDay },
                                });
                                handleChange({ target: { name: "Autocomplete11", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete11"
                                onChange={handleChange}
                                value={values.Autocomplete11}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Tuesday.includes("2nd Tuesday")}
                          onChange={handleChange}
                          name="Tuesday"
                          value="2nd Tuesday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Tuesday?.includes("2nd Tuesday")) {
                                newvalue = "2nd Tuesday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainTuesDay.includes(newvalue);

                                // Update MainTuesDay array
                                const updatedMainTuesDay = [...values.MainTuesDay, newvalue];

                                handleChange({
                                  target: { name: "MainTuesDay", value: updatedMainTuesDay },
                                });
                                handleChange({ target: { name: "Autocomplete12", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete12"
                                onChange={handleChange}
                                value={values.Autocomplete12}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Tuesday.includes("3rd Tuesday")}
                          onChange={handleChange}
                          name="Tuesday"
                          value="3rd Tuesday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Tuesday?.includes("3rd Tuesday")) {
                                newvalue = "3rd Tuesday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainTuesDay.includes(newvalue);

                                // Update MainTuesDay array
                                const updatedMainTuesDay = [...values.MainTuesDay, newvalue];

                                handleChange({
                                  target: { name: "MainTuesDay", value: updatedMainTuesDay },
                                });
                                handleChange({ target: { name: "Autocomplete13", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete13"
                                onChange={handleChange}
                                value={values.Autocomplete13}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Tuesday.includes("4th Tuesday")}
                          onChange={handleChange}
                          name="Tuesday"
                          value="4th Tuesday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Tuesday?.includes("4th Tuesday")) {
                                newvalue = "4th Tuesday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainTuesDay.includes(newvalue);

                                // Update MainTuesDay array
                                const updatedMainTuesDay = [...values.MainTuesDay, newvalue];

                                handleChange({
                                  target: { name: "MainTuesDay", value: updatedMainTuesDay },
                                });
                                handleChange({ target: { name: "Autocomplete14", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete14"
                                onChange={handleChange}
                                value={values.Autocomplete14}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Tuesday.includes("5th Tuesday")}
                          onChange={handleChange}
                          name="Tuesday"
                          value="5th Tuesday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Tuesday?.includes("5th Tuesday")) {
                                newvalue = "5th Tuesday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainTuesDay.includes(newvalue);

                                // Update MainTuesDay array
                                const updatedMainTuesDay = [...values.MainTuesDay, newvalue];

                                handleChange({
                                  target: { name: "MainTuesDay", value: updatedMainTuesDay },
                                });
                                handleChange({ target: { name: "Autocomplete15", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete15"
                                onChange={handleChange}
                                value={values.Autocomplete15}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.2}>
                    <MDTypography>Wednesday</MDTypography>
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Wednesday.includes("Full Day")}
                          onChange={handleChange}
                          name="Wednesday"
                          value="Full Day"
                        />
                      }
                      label=""
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Wednesday.includes("1st Wednesday")}
                          onChange={handleChange}
                          name="Wednesday"
                          value="1st Wednesday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Wednesday?.includes("1st Wednesday")) {
                                newvalue = "1st Wednesday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainWednesDay.includes(newvalue);

                                // Update MainWednesDay array
                                const updatedMainWednesDay = [...values.MainWednesDay, newvalue];

                                handleChange({
                                  target: { name: "MainWednesDay", value: updatedMainWednesDay },
                                });
                                handleChange({ target: { name: "Autocomplete16", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete16"
                                onChange={handleChange}
                                value={values.Autocomplete16}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Wednesday.includes("2nd Wednesday")}
                          onChange={handleChange}
                          name="Wednesday"
                          value="2nd Wednesday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Wednesday?.includes("2nd Wednesday")) {
                                newvalue = "2nd Wednesday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainWednesDay.includes(newvalue);

                                // Update MainWednesDay array
                                const updatedMainWednesDay = [...values.MainWednesDay, newvalue];

                                handleChange({
                                  target: { name: "MainWednesDay", value: updatedMainWednesDay },
                                });
                                handleChange({ target: { name: "Autocomplete17", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete17"
                                onChange={handleChange}
                                value={values.Autocomplete17}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Wednesday.includes("3rd Wednesday")}
                          onChange={handleChange}
                          name="Wednesday"
                          value="3rd Wednesday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Wednesday?.includes("3rd Wednesday")) {
                                newvalue = "3rd Wednesday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainWednesDay.includes(newvalue);

                                // Update MainWednesDay array
                                const updatedMainWednesDay = [...values.MainWednesDay, newvalue];

                                handleChange({
                                  target: { name: "MainWednesDay", value: updatedMainWednesDay },
                                });
                                handleChange({ target: { name: "Autocomplete18", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete18"
                                onChange={handleChange}
                                value={values.Autocomplete18}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Wednesday.includes("4th Wednesday")}
                          onChange={handleChange}
                          name="Wednesday"
                          value="4th Wednesday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Wednesday?.includes("4th Wednesday")) {
                                newvalue = "4th Wednesday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainWednesDay.includes(newvalue);

                                // Update MainWednesDay array
                                const updatedMainWednesDay = [...values.MainWednesDay, newvalue];

                                handleChange({
                                  target: { name: "MainWednesDay", value: updatedMainWednesDay },
                                });
                                handleChange({ target: { name: "Autocomplete19", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete19"
                                onChange={handleChange}
                                value={values.Autocomplete19}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Wednesday.includes("5th Wednesday")}
                          onChange={handleChange}
                          name="Wednesday"
                          value="Full Day"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Wednesday?.includes("5th Wednesday")) {
                                newvalue = "5th Wednesday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainWednesDay.includes(newvalue);

                                // Update MainWednesDay array
                                const updatedMainWednesDay = [...values.MainWednesDay, newvalue];

                                handleChange({
                                  target: { name: "MainWednesDay", value: updatedMainWednesDay },
                                });
                                handleChange({ target: { name: "Autocomplete20", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete20"
                                onChange={handleChange}
                                value={values.Autocomplete20}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.2}>
                    <MDTypography>Thursday</MDTypography>
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Thursaday.includes("Full Day")}
                          onChange={handleChange}
                          name="Thursaday"
                          value="Full Day"
                        />
                      }
                      label=""
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Thursaday.includes("1st Thursaday")}
                          onChange={handleChange}
                          name="Thursaday"
                          value="1st Thursaday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Thursaday?.includes("1st Thursaday")) {
                                newvalue = "1st Thursaday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // Thursaday.includes(newvalue);

                                // Update Thursaday array
                                const updatedThursaday = [...values.Thursaday, newvalue];

                                handleChange({
                                  target: { name: "Thursaday", value: updatedThursaday },
                                });
                                handleChange({ target: { name: "Autocomplete21", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete21"
                                onChange={handleChange}
                                value={values.Autocomplete21}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Thursaday.includes("2nd Thursaday")}
                          onChange={handleChange}
                          name="Thursaday"
                          value="2nd Thursaday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Thursaday?.includes("2nd Thursaday")) {
                                newvalue = "2nd Thursaday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // Thursaday.includes(newvalue);

                                // Update Thursaday array
                                const updatedThursaday = [...values.Thursaday, newvalue];

                                handleChange({
                                  target: { name: "Thursaday", value: updatedThursaday },
                                });
                                handleChange({ target: { name: "Autocomplete22", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete22"
                                onChange={handleChange}
                                value={values.Autocomplete22}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Thursaday.includes("3rd Thursaday")}
                          onChange={handleChange}
                          name="Thursaday"
                          value="3rd Thursaday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Thursaday?.includes("3rd Thursaday")) {
                                newvalue = "3rd Thursaday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // Thursaday.includes(newvalue);

                                // Update Thursaday array
                                const updatedThursaday = [...values.Thursaday, newvalue];

                                handleChange({
                                  target: { name: "Thursaday", value: updatedThursaday },
                                });
                                handleChange({ target: { name: "Autocomplete23", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete23"
                                onChange={handleChange}
                                value={values.Autocomplete23}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Thursaday.includes("4th Thursaday")}
                          onChange={handleChange}
                          name="Thursaday"
                          value="4th Thursaday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Thursaday?.includes("4th Thursaday")) {
                                newvalue = "4th Thursaday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // Thursaday.includes(newvalue);

                                // Update Thursaday array
                                const updatedThursaday = [...values.Thursaday, newvalue];

                                handleChange({
                                  target: { name: "Thursaday", value: updatedThursaday },
                                });
                                handleChange({ target: { name: "Autocomplete24", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete24"
                                onChange={handleChange}
                                value={values.Autocomplete24}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Thursaday.includes("5th Thursaday")}
                          onChange={handleChange}
                          name="Thursaday"
                          value="5th Thursaday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Thursaday?.includes("5th Thursaday")) {
                                newvalue = "1st Thursaday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // Thursaday.includes(newvalue);

                                // Update Thursaday array
                                const updatedThursaday = [...values.Thursaday, newvalue];

                                handleChange({
                                  target: { name: "Thursaday", value: updatedThursaday },
                                });
                                handleChange({ target: { name: "Autocomplete25", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete25"
                                onChange={handleChange}
                                value={values.Autocomplete25}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>{" "}
                  <Grid sm={1.2}>
                    <MDTypography>Friday</MDTypography>
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Friday.includes("Full Day")}
                          onChange={handleChange}
                          name="Friday"
                          value="Full Day"
                        />
                      }
                      label=""
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Friday.includes("1st Friday")}
                          onChange={handleChange}
                          name="Friday"
                          value="1st Friday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Friday?.includes("1st Friday")) {
                                newvalue = "1st Friday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainFriday.includes(newvalue);

                                // Update MainFriday array
                                const updatedMainFriday = [...values.MainFriday, newvalue];

                                handleChange({
                                  target: { name: "MainFriday", value: updatedMainFriday },
                                });
                                handleChange({ target: { name: "Autocomplete26", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete26"
                                onChange={handleChange}
                                value={values.Autocomplete26}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Friday.includes("2nd Friday")}
                          onChange={handleChange}
                          name="Friday"
                          value="2nd Friday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Friday?.includes("2nd Friday")) {
                                newvalue = "2nd Friday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainFriday.includes(newvalue);

                                // Update MainFriday array
                                const updatedMainFriday = [...values.MainFriday, newvalue];

                                handleChange({
                                  target: { name: "MainFriday", value: updatedMainFriday },
                                });
                                handleChange({ target: { name: "Autocomplete27", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete27"
                                onChange={handleChange}
                                value={values.Autocomplete27}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Friday.includes("3rd Friday")}
                          onChange={handleChange}
                          name="Friday"
                          value="3rd Friday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Friday?.includes("3rd Friday")) {
                                newvalue = "3rd Friday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainFriday.includes(newvalue);

                                // Update MainFriday array
                                const updatedMainFriday = [...values.MainFriday, newvalue];

                                handleChange({
                                  target: { name: "MainFriday", value: updatedMainFriday },
                                });
                                handleChange({ target: { name: "Autocomplete28", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete28"
                                onChange={handleChange}
                                value={values.Autocomplete28}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Friday.includes("4th Friday")}
                          onChange={handleChange}
                          name="Friday"
                          value="4th Friday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Friday?.includes("4th Friday")) {
                                newvalue = "4th Friday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainFriday.includes(newvalue);

                                // Update MainFriday array
                                const updatedMainFriday = [...values.MainFriday, newvalue];

                                handleChange({
                                  target: { name: "MainFriday", value: updatedMainFriday },
                                });
                                handleChange({ target: { name: "Autocomplete29", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete29"
                                onChange={handleChange}
                                value={values.Autocomplete29}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Friday.includes("5th Friday")}
                          onChange={handleChange}
                          name="Friday"
                          value="5th Friday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Friday?.includes("5th Friday")) {
                                newvalue = "5th Friday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainFriday.includes(newvalue);

                                // Update MainFriday array
                                const updatedMainFriday = [...values.MainFriday, newvalue];

                                handleChange({
                                  target: { name: "MainFriday", value: updatedMainFriday },
                                });
                                handleChange({ target: { name: "Autocomplete30", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete30"
                                onChange={handleChange}
                                value={values.Autocomplete30}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.2}>
                    <MDTypography>Saturday</MDTypography>
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Saturday.includes("Full Day")}
                          onChange={handleChange}
                          name="Saturday"
                          value="Full Day"
                        />
                      }
                      label=""
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Saturday.includes("1st Saturday")}
                          onChange={handleChange}
                          name="Saturday"
                          value="1st Saturday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            id="combo-box-demo"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Saturday?.includes("1st Saturday")) {
                                newvalue = "1st Saturday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainSaturDay.includes(newvalue);
                                const updatedMainSaturday = [...values.MainSaturday, newvalue];

                                handleChange({
                                  target: { name: "MainSaturday", value: updatedMainSaturday },
                                });

                                handleChange({ target: { name: "Autocomplete31", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete31"
                                onChange={handleChange}
                                value={values.Autocomplete31}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Saturday.includes("2nd Saturday")}
                          onChange={handleChange}
                          name="Saturday"
                          value="2nd Saturday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Saturday?.includes("2nd Saturday")) {
                                newvalue = "2nd  Saturday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainSaturDay.includes(newvalue);

                                // Update MainSaturday array
                                const updatedMainSaturday = [...values.MainSaturday, newvalue];

                                handleChange({
                                  target: { name: "MainSaturday", value: updatedMainSaturday },
                                });
                                handleChange({ target: { name: "Autocomplete32", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete32"
                                onChange={handleChange}
                                value={values.Autocomplete32}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Saturday.includes("3rd Saturday")}
                          onChange={handleChange}
                          name="Saturday"
                          value="3rd Saturday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Saturday?.includes("3rd Saturday")) {
                                newvalue = "3rd Saturday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainSaturDay.includes(newvalue);

                                // Update MainSaturday array
                                const updatedMainSaturday = [...values.MainSaturday, newvalue];

                                handleChange({
                                  target: { name: "MainSaturday", value: updatedMainSaturday },
                                });
                                handleChange({ target: { name: "Autocomplete33", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete33"
                                onChange={handleChange}
                                value={values.Autocomplete33}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Saturday.includes("4th Saturday")}
                          onChange={handleChange}
                          name="Saturday"
                          value="4th Saturday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Saturday?.includes("4th Saturday")) {
                                newvalue = "4th Saturday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainSaturDay.includes(newvalue);

                                // Update MainSaturday array
                                const updatedMainSaturday = [...values.MainSaturday, newvalue];

                                handleChange({
                                  target: { name: "MainSaturday", value: updatedMainSaturday },
                                });
                                handleChange({ target: { name: "Autocomplete34", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete34"
                                onChange={handleChange}
                                value={values.Autocomplete34}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid sm={1.8}>
                    <FormControlLabel
                      value="top"
                      control={
                        <Checkbox
                          checked={values.Saturday.includes("5th Saturday")}
                          onChange={handleChange}
                          name="Saturday"
                          value="5th Saturday"
                        />
                      }
                      label={
                        values.Halfworkingday[0] === "E" ? (
                          <Autocomplete
                            sx={{ width: "135%" }}
                            // multiple
                            defaultValue="Full Day"
                            onChange={(event: any, value: any) => {
                              let newvalue = value;
                              if (values?.Saturday?.includes("5th Saturday")) {
                                newvalue = "5th Saturday" + " " + value;
                                console.log(newvalue, "value of sat ");
                                // MainSaturDay.includes(newvalue);
                                values.MainSaturday.includes("5th Saturday" + " " + value);
                                handleChange({ target: { name: "Autocomplete35", newvalue } });
                              }
                            }}
                            // value={department}
                            // onChange={handleMainFieldChange}
                            options={selectData.halfday}
                            renderInput={(params) => (
                              <MDInput
                                label={""}
                                InputLabelProps={{ shrink: true }}
                                name="Autocomplete35"
                                onChange={handleChange}
                                value={values.Autocomplete35}
                                {...params}
                                variant="standard"
                              />
                            )}
                          />
                        ) : (
                          ""
                        )
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
            <Grid sm={6}>
              <MDTypography ml={15} variant="h5">
                {" "}
                Shift Allowance
              </MDTypography>
            </Grid>
            <Grid sm={6}>
              <FormControl>
                <RadioGroup>
                  <FormControlLabel
                    control={
                      <Radio
                        checked={values.shift_allowance.includes("shift_allowance:Enable")}
                        onChange={handleChange}
                        name="shift_allowance"
                        value="shift_allowance:Enable"
                      />
                    }
                    label={<MDTypography variant="body2">Enable</MDTypography>}
                  />

                  <FormControlLabel
                    control={
                      <Radio
                        checked={values.shift_allowance.includes("shift_allowance:Disable")}
                        onChange={handleChange}
                        name="shift_allowance"
                        value="shift_allowance:Disable"
                      />
                    }
                    label={<MDTypography variant="body2">Disable</MDTypography>}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            {values.shift_allowance === "shift_allowance:Enable" && (
              <Grid container>
                <Grid sm={6}>
                  <MDTypography ml={15}>Rate Per Day</MDTypography>
                </Grid>
                <Grid sm={6}>
                  <MDInput />
                </Grid>
              </Grid>
            )}
            <Grid container>
              <Grid sm={6}>
                <MDTypography ml={15} variant="h5">
                  Applicable For
                </MDTypography>
              </Grid>
              <Grid sm={6}>
                {/* <MDInput /> */}
                <TreeSelect {...tProps} />
              </Grid>
            </Grid>

            <Grid mt={3}>
              <MDButton
                color="info"
                variant="contained"
                type="submit"
                onClick={() => {
                  handleCloseupdate();
                }}
              >
                Save
              </MDButton>
            </Grid>
            <Grid ml={2} mt={3}>
              <MDButton
                color="primary"
                variant="contained"
                onClick={() => {
                  handleCloseupdate();
                }}
              >
                Cancel
              </MDButton>
            </Grid>
          </Grid>
        </MDBox>
      </form>
    </Card>
  );
};

export default Updateshift;
