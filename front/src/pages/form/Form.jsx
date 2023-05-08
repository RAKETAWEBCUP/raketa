import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
// import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Header } from '../../components';
import { useTheme } from "@emotion/react";
import { tokens } from "../../hooks/theme";

// Initialisation des champs
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

// Regex pour le champ contact
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// Validation pour chaque champs
// const checkoutSchema = yup.object().shape({
//   firstName: yup.string().required("Required."),
//   lastName: yup.string().required("Required."),
//   email: yup.string().email("Invalid email.").required("Required."),
//   contact: yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid.")
//     .required("Required."),
//   address1: yup.string().required("Required."),
//   address2: yup.string().required("Required."),
// });

const Form = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <div></div>
    // <Box>
    //   <Header title="CREATE USER" subtitle="Create a New User Profile" />

    //   <Formik
    //     onSubmit={handleFormSubmit}
    //     initialValues={initialValues}
    //     validationSchema={checkoutSchema}
    //   >
    //     {({
    //       values,
    //       errors,
    //       touched,
    //       handleBlur,
    //       handleChange,
    //       handleSubmit,
    //     }) => (
    //       <form onSubmit={handleSubmit}>
    //         <Box
    //           mt='20px'
    //           display="grid"
    //           gap="30px"
    //           gridTemplateColumns="repeat(4, minmax(0, 1fr))"
    //           sx={{
    //             "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
    //           }}
    //         >
    //           <TextField
    //             fullWidth
    //             type="text"
    //             label="First Name"
    //             onBlur={handleBlur}
    //             onChange={handleChange}
    //             value={values.firstName}
    //             name="firstName"
    //             error={!!touched.firstName && !!errors.firstName}
    //             helperText={touched.firstName && errors.firstName}
    //             sx={{ 
    //               gridColumn: "span 2",
    //             }}
    //           />
    //           <TextField
    //             fullWidth
    //             type="text"
    //             label="Last Name"
    //             onBlur={handleBlur}
    //             onChange={handleChange}
    //             value={values.lastName}
    //             name="lastName"
    //             error={!!touched.lastName && !!errors.lastName}
    //             helperText={touched.lastName && errors.lastName}
    //             sx={{ gridColumn: "span 2" }}
    //           />
    //           <TextField
    //             fullWidth
    //             type="text"
    //             label="Email"
    //             onBlur={handleBlur}
    //             onChange={handleChange}
    //             value={values.email}
    //             name="email"
    //             error={!!touched.email && !!errors.email}
    //             helperText={touched.email && errors.email}
    //             sx={{ gridColumn: "span 4" }}
    //           />
    //           <TextField
    //             fullWidth
    //             type="text"
    //             label="Contact Number"
    //             onBlur={handleBlur}
    //             onChange={handleChange}
    //             value={values.contact}
    //             name="contact"
    //             error={!!touched.contact && !!errors.contact}
    //             helperText={touched.contact && errors.contact}
    //             sx={{ gridColumn: "span 4" }}
    //           />
    //           <TextField
    //             fullWidth
    //             type="text"
    //             label="Address 1"
    //             onBlur={handleBlur}
    //             onChange={handleChange}
    //             value={values.address1}
    //             name="address1"
    //             error={!!touched.address1 && !!errors.address1}
    //             helperText={touched.address1 && errors.address1}
    //             sx={{ gridColumn: "span 4" }}
    //           />
    //           <TextField
    //             fullWidth
    //             type="text"
    //             label="Address 2"
    //             onBlur={handleBlur}
    //             onChange={handleChange}
    //             value={values.address2}
    //             name="address2"
    //             error={!!touched.address2 && !!errors.address2}
    //             helperText={touched.address2 && errors.address2}
    //             sx={{ gridColumn: "span 4" }}
    //           />
    //         </Box>
    //         <Box display="flex" justifyContent="end" mt="20px">
    //           <Button type="submit" variant="contained" sx={{boxShadow:1, color: colors.blueAccent[100], background: colors.blueAccent[200], '&:hover':{background: colors.blueAccent[200], boxShadow:1}}}>
    //             Create New User
    //           </Button>
    //         </Box>
    //       </form>
    //     )}
    //   </Formik>
    // </Box>
  );
}

export default Form