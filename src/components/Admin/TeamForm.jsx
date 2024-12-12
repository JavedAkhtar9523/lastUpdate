// import React from 'react';
// import { Box, Button, TextField, Rating,Avatar } from '@mui/material';
// import { Formik } from "formik";
// import * as yup from 'yup';
// import { useMediaQuery } from "@mui/material";
// import Header from './Header';
// import { styled } from '@mui/material/styles';
// import { useDispatch } from 'react-redux';
// import { createTeamMember } from "../../redux/admin/slice/teamSlice";
// import { toast } from "react-toastify";
// import CameraAltIcon from "@mui/icons-material/CameraAlt";

// const Input = styled('input')({
//     display: 'none',
// });

// const CircularButton = styled(Button)(({ theme }) => ({
//     width: '80px',
//     height: '80px',
//     borderRadius: '50%',
//     backgroundColor: theme.palette.primary.main,
//     color: 'white',
//     '&:hover': {
//         backgroundColor: theme.palette.primary.dark,
//     },
// }));

// const TeamForm = () => {
//     const dispatch = useDispatch();
//     const isNonMobile = useMediaQuery("(min-width:600px)");
//     const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    
     
//     const handleFileChange = (e, setFieldValue) => {
//         const file = e.target.files[0];
//         if (file) {
//             if (!file.type.startsWith('image/')) {
//                 toast.error("Please upload a valid image file");
//                 return;
//             }
//             if (file.size > 5 * 1024 * 1024) { // 5MB limit
//                 toast.error("File size must be less than 5MB");
//                 return;
//             }
//             const previewURL = URL.createObjectURL(file);
//             setFieldValue("avatar", file);
//             setFieldValue("previewImage", previewURL);
//         }
//     };
    
    

//     const handleFormSubmit = async (values) => {
//         const formData = new FormData();
//         formData.append('name', values.name);
//         formData.append('role', values.role);
//         formData.append('contactInfo[email]', values.email); 
//         formData.append('contactInfo[phone]', values.contact);
//         formData.append('contactInfo[location]', values.location);
//         formData.append('bio', values.bio);
//         formData.append('avatar', values.avatar);
//         formData.append('rating', values.rating);
//         formData.append('socialMedia[instagram]', values.instagram);
//         formData.append('socialMedia[facebook]', values.facebook);
//         formData.append('socialMedia[twitter]', values.twitter);
//         formData.append('socialMedia[linkedin]', values.linkedin);
//         console.log([...formData]);
//         try {
//             const resultAction = await dispatch(createTeamMember(formData));
//             if (createTeamMember.fulfilled.match(resultAction)) {
//                 toast.success('Team member created successfully!');
//             } else {
//                 toast.error(resultAction.payload || 'Failed to create team member');
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error('An unexpected error occurred.');
//         }
//     };
    
    

//     const initialValues = {
//         name: "",
//         role: "",
//         email: "",
//         contact: "",
//         location: "",
//         bio: "",
//         avatar: null,
//         previewImage: null, 
//         rating: null,
//         instagram: "",
//         facebook: "",
//         twitter: "",
//         linkedin: "",
//     };
    

//     const checkoutSchema = yup.object().shape({
//         name: yup.string().required("Required"),
//         role: yup.string().required("Required"),
//         email: yup.string().email("Invalid email!").required("Required"),
//         contact: yup.string().matches(phoneRegExp, "Phone number is not valid!").required("Required"),
//         location: yup.string().required("Required"),
//         bio: yup.string().required("Required"),
//         image: yup.mixed().required("Image file is required"),
//         rating: yup.number().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5").required("Required"),
//         instagram: yup.string().url("Must be a valid URL"),
//         facebook: yup.string().url("Must be a valid URL"),
//         twitter: yup.string().url("Must be a valid URL"),
//         linkedin: yup.string().url("Must be a valid URL"),
//     });

//     return (
//         <Box m="20px">
//             <Box textAlign="left">
//                 <Header title="CREATE TEAM MEMBER" subtitle="Create a New Team Member Profile" />
//             </Box>

//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={checkoutSchema}
//                 onSubmit={handleFormSubmit}
//             >
//                 {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
//                     <form onSubmit={handleSubmit} action="/upload-image" method="POST" enctype="multipart/form-data">
//                         <Box
//                             display="grid"
//                             gap="30px"
//                             gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//                             sx={{
//                                 "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//                             }}
//                         >
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Name"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.name}
//                                 name="name"
//                                 error={!!touched.name && !!errors.name}
//                                 helperText={touched.name && errors.name}
//                                 sx={{ gridColumn: "span 2" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Role"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.role}
//                                 name="role"
//                                 error={!!touched.role && !!errors.role}
//                                 helperText={touched.role && errors.role}
//                                 sx={{ gridColumn: "span 2" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Email"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.email}
//                                 name="email"
//                                 error={!!touched.email && !!errors.email}
//                                 helperText={touched.email && errors.email}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Contact Number"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.contact}
//                                 name="contact"
//                                 error={!!touched.contact && !!errors.contact}
//                                 helperText={touched.contact && errors.contact}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Location"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.location}
//                                 name="location"
//                                 error={!!touched.location && !!errors.location}
//                                 helperText={touched.location && errors.location}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Bio"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.bio}
//                                 name="bio"
//                                 error={!!touched.bio && !!errors.bio}
//                                 helperText={touched.bio && errors.bio}
//                                 sx={{ gridColumn: "span 4" }}
//                             />

//                             {/* Social Media Links */}
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Instagram URL"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.instagram}
//                                 name="instagram"
//                                 error={!!touched.instagram && !!errors.instagram}
//                                 helperText={touched.instagram && errors.instagram}
//                                 sx={{ gridColumn: "span 2" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Facebook URL"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.facebook}
//                                 name="facebook"
//                                 error={!!touched.facebook && !!errors.facebook}
//                                 helperText={touched.facebook && errors.facebook}
//                                 sx={{ gridColumn: "span 2" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Twitter URL"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.twitter}
//                                 name="twitter"
//                                 error={!!touched.twitter && !!errors.twitter}
//                                 helperText={touched.twitter && errors.twitter}
//                                 sx={{ gridColumn: "span 2" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="LinkedIn URL"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.linkedin}
//                                 name="linkedin"
//                                 error={!!touched.linkedin && !!errors.linkedin}
//                                 helperText={touched.linkedin && errors.linkedin}
//                                 sx={{ gridColumn: "span 2" }}
//                             />
                            
//                             {/* Image Input Field */}
        
// <label htmlFor="avatar">
//     <Input
//         accept="image/*"
//         id="avatar"
//         type="file"
//         onChange={(e) => handleFileChange(e, setFieldValue)}
//     />
//     <CircularButton variant="contained" component="span">
//         <CameraAltIcon />
//     </CircularButton>
// </label>
//                             {errors.avatar && touched.avatar && <div style={{ color: 'red' }}>{errors.avatar}</div>}

//                             {/* Image Preview */}
//                             <Box sx={{ gridColumn: "span 4", textAlign: "left", marginTop: "10px" }}>
//                                 {values.previewImage && (
//                                     <Avatar src={values.previewImage} alt="Avatar Preview" sx={{ width: 80, height: 80, margin: "10px auto" }} />
//                                 )}
//                             </Box>
//                             {/* Rating Field */}
//                             <Box sx={{ gridColumn: "span 4", display: "flex", alignItems: "center" }}>
//                                 <label style={{ fontSize: "1rem", marginRight: "10px" }}>Rating:</label>
//                                 <Rating
//                                     name="rating"
//                                     value={values.rating}
//                                     onChange={(event, newValue) => {
//                                         setFieldValue("rating", newValue);
//                                     }}
//                                 />
//                                 {errors.rating && touched.rating && <div style={{ color: 'red' }}>{errors.rating}</div>}
//                             </Box>
//                         </Box>
//                         <Box display="flex" justifyContent="end" mt="20px">
//                             <Button type="submit" color="secondary" variant="contained">
//                                 Create New Team Member
//                             </Button>
//                         </Box>
//                     </form>
//                 )}
//             </Formik>
//         </Box>
//     );
// };

// export default TeamForm;



import React, { useState } from 'react';
import { Box, Button, TextField, Rating, Avatar } from '@mui/material';
import { useMediaQuery } from "@mui/material";
import Header from './Header';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { createTeamMember } from "../../redux/admin/slice/teamSlice";
import { toast } from "react-toastify";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Input = styled('input')({
    display: 'none',
});

const CircularButton = styled(Button)(({ theme }) => ({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

const TeamForm = () => {
    const dispatch = useDispatch();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

    const [formData, setFormData] = useState({
        name: "",
        role: "",
        email: "",
        contact: "",
        location: "",
        bio: "",
        avatar: null,
        previewImage: null,
        rating: null,
        instagram: "",
        facebook: "",
        twitter: "",
        linkedin: "",
    });

    const [errors, setErrors] = useState({});

    // const handleFileChange = (e) => {
    //     if (e.target.name === "avatar") {
    //         const reader = new FileReader();
      
    //         reader.onload = () => {
    //           if (reader.readyState === 2) {
    //             setAvatarPreview(reader.result);
    //             setAvatar(reader.result);
    //           }
    //         };
      
    //         reader.readAsDataURL(e.target.files[0]);
    //       } else {
    //         setUserData({ ...userData, [e.target.name]: e.target.value });
    //       }
    // };

const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        if (!file.type.startsWith("image/")) {
            toast.error("Only image files are allowed!");
            return;
        }
        if (file.size > 5 * 1024 * 1024) { // 5 MB limit
            toast.error("File size exceeds 5 MB!");
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setFormData((prev) => ({ ...prev, avatar: file }));
            }
        };
        reader.readAsDataURL(file);
    }
};

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.role) newErrors.role = "Role is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email!";
        if (!formData.contact) newErrors.contact = "Contact number is required";
        else if (!phoneRegExp.test(formData.contact)) newErrors.contact = "Phone number is not valid!";
        if (!formData.location) newErrors.location = "Location is required";
        if (!formData.bio) newErrors.bio = "Bio is required";
        if (!formData.avatar) newErrors.avatar = "Image file is required";
        if (formData.rating === null) newErrors.rating = "Rating is required";
        if (formData.instagram && !/^https?:\/\/.*$/.test(formData.instagram)) newErrors.instagram = "Invalid URL for Instagram";
        if (formData.facebook && !/^https?:\/\/.*$/.test(formData.facebook)) newErrors.facebook = "Invalid URL for Facebook";
        if (formData.twitter && !/^https?:\/\/.*$/.test(formData.twitter)) newErrors.twitter = "Invalid URL for Twitter";
        if (formData.linkedin && !/^https?:\/\/.*$/.test(formData.linkedin)) newErrors.linkedin = "Invalid URL for LinkedIn";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('role', formData.role);
        formDataToSend.append('contactInfo[email]', formData.email); 
        formDataToSend.append('contactInfo[phone]', formData.contact);
        formDataToSend.append('contactInfo[location]', formData.location);
        formDataToSend.append('bio', formData.bio);
        formDataToSend.append('avatar', formData.avatar);
        formDataToSend.append('rating', formData.rating);
        formDataToSend.append('socialMedia[instagram]', formData.instagram);
        formDataToSend.append('socialMedia[facebook]', formData.facebook);
        formDataToSend.append('socialMedia[twitter]', formData.twitter);
        formDataToSend.append('socialMedia[linkedin]', formData.linkedin);
        
        try {
            const resultAction = await dispatch(createTeamMember(formDataToSend));
            if (createTeamMember.fulfilled.match(resultAction)) {
                toast.success('Team member created successfully!');
            } else {
                toast.error(resultAction.payload || 'Failed to create team member');
            }
        } catch (error) {
            console.error(error);
            toast.error('An unexpected error occurred.');
        }
    };

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="flex-start">
                <Header title="CREATE TEAM MEMBER" subtitle="Create a New Team Member Profile" />
            </Box>
            <form onSubmit={handleFormSubmit}>
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    }}
                >
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Name"
                        onChange={handleChange}
                        value={formData.name}
                        name="name"
                        error={!!errors.name}
                        helperText={errors.name}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Role"
                        onChange={handleChange}
                        value={formData.role}
                        name="role"
                        error={!!errors.role}
                        helperText={errors.role}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Email"
                        onChange={handleChange}
                        value={formData.email}
                        name="email"
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Contact Number"
                        onChange={handleChange}
                        value={formData.contact}
                        name="contact"
                        error={!!errors.contact}
                        helperText={errors.contact}
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Location"
                        onChange={handleChange}
                        value={formData.location}
                        name="location"
                        error={!!errors.location}
                        helperText={errors.location}
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Bio"
                        onChange={handleChange}
                        value={formData.bio}
                        name="bio"
                        error={!!errors.bio}
                        helperText={errors.bio}
                        sx={{ gridColumn: "span 4" }}
                    />

                    {/* Social Media Links */}
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Instagram URL"
                        onChange={handleChange}
                        value={formData.instagram}
                        name="instagram"
                        error={!!errors.instagram}
                        helperText={errors.instagram}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Facebook URL"
                        onChange={handleChange}
                        value={formData.facebook}
                        name="facebook"
                        error={!!errors.facebook}
                        helperText={errors.facebook}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Twitter URL"
                        onChange={handleChange}
                        value={formData.twitter}
                        name="twitter"
                        error={!!errors.twitter}
                        helperText={errors.twitter}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="LinkedIn URL"
                        onChange={handleChange}
                        value={formData.linkedin}
                        name="linkedin"
                        error={!!errors.linkedin}
                        helperText={errors.linkedin}
                        sx={{ gridColumn: "span 2" }}
                    />

                    {/* Image Input Field */}
                    <label htmlFor="avatar">
                        <Input
                            accept="image/*"
                            id="avatar"
                            type="file"
                            onChange={handleFileChange}
                        />
                        <CircularButton component="span">
                            <CameraAltIcon />
                        </CircularButton>
                    </label>
                    {avatarPreview && (
                    <Box mt={2}>
                        <Avatar src={avatarPreview} sx={{ width: 120, height: 120 }} />
                    </Box>
                    )}

                    {/* Rating */}
                    <Box sx={{ gridColumn: "span 4" }}>
                        <Rating
                            value={formData.rating}
                            onChange={(_, newValue) => setFormData(prev => ({ ...prev, rating: newValue }))}
                        />
                        {errors.rating && <p style={{ color: "red" }}>{errors.rating}</p>}
                    </Box>
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3 }}
                >
                    Create Member
                </Button>
            </form>
        </Box>
    );
};

export default TeamForm;
