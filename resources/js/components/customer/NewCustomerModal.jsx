import React, {useEffect, useState} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid,
    InputLabel, MenuItem, Select,
    TextField
} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";

const NewCustomerModal = ({showCustomerModal, setShowCustomerModal, newCustomer, setNewCustomer, updateNewCustomerState}) => {

    const [customerType, setCustomerType] = useState();
    const [customerPriceLevel, setCustomerPriceLevel] = useState();
    const [provinces, setProvinces] = useState([]);
    const [municipalities, setMunicipalities] = useState([]);
    const [barangays, setBarangays] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedMunicipality, setSelectedMunicipality] = useState('');
    const [selectedBarangay, setSelectedBarangay] = useState('');

    const getCustomerType = () => {
        axios.get('api/customer_type')
            .then(result => {
                setCustomerType(result.data);
            })
            .catch(error => {
                console.log('error');
            })
    }

    const getPriceLevel = () => {
        axios.get('api/price_level')
            .then(result => {
                setCustomerPriceLevel(result.data);
            })
            .catch(error => {
                console.log('error');
            })
    }

    const fetchProvinces = () => {
        axios.get('https://psgc.gitlab.io/api/provinces/')
            .then(response => {
                console.log(response.data)
                setProvinces(response.data)
            })
            .catch(error => {
                console.error('Error fetching provinces:', error);
            })
    };

    const fetchMunicipalities = async (provinceId) => {
        try {
            const response = await axios.get(`https://psgc.gitlab.io/api/municipalities?provinceId=${provinceId}`);
            setMunicipalities(response.data);
        } catch (error) {
            console.error('Error fetching municipalities:', error);
        }
    };

    const fetchBarangays = async (municipalityId) => {
        try {
            const response = await axios.get(`https://psgc.gitlab.io/api/barangays?municipalityId=${municipalityId}`);
            setBarangays(response.data);
        } catch (error) {
            console.error('Error fetching barangays:', error);
        }
    };

    const handleProvinceChange = (event) => {
        const provinceId = event.target.value;
        setSelectedProvince(provinceId);
        setSelectedMunicipality('');
        setSelectedBarangay('');
        fetchMunicipalities(provinceId);
    };

    const handleMunicipalityChange = (event) => {
        const municipalityId = event.target.value;
        setSelectedMunicipality(municipalityId);
        setSelectedBarangay('');
        fetchBarangays(municipalityId);
    };

    const handleBarangayChange = (event) => {
        setSelectedBarangay(event.target.value);
    };

    useEffect(() => {
        getCustomerType();
        getPriceLevel();
        fetchProvinces();
    }, []);

    return (
        <Dialog
            open={showCustomerModal}
            // onClose={() => setShowModal(false)}
            fullWidth={true}
            maxWidth={'md'}
        >
            <DialogTitle style={{ backgroundColor: '#4dabf5' }}>Add New Customer</DialogTitle>
            <DialogContent>
                <Grid container sx={{mt: 2}} spacing={2}>
                    <Grid item xs={12}>
                        <h4 style={{ margin: 0}}>Personal</h4>
                    </Grid>
                    {/* First Row - First Name, Last Name and Middle Name */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label={'Area'}
                            name='area'
                            size={'small'}
                            value={newCustomer.area}
                            onChange={updateNewCustomerState}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <InputLabel value={newCustomer.price_level} size={'small'} id="demo-simple-select-label">Customer Type</InputLabel>
                            <Select
                                value={newCustomer.price_level}
                                title={'Price Level'}
                                size={'small'}
                                name={'price_level'}
                                onChange={updateNewCustomerState}
                            >
                                {
                                    !customerPriceLevel ? (
                                            <MenuItem ></MenuItem>
                                        ) :
                                        customerPriceLevel.map((c_price_level) => {
                                            return (
                                                <MenuItem key={c_price_level.price_level_name} value={c_price_level.price_level_name}>{c_price_level.price_level_name}</MenuItem>
                                            )
                                        })
                                }

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <InputLabel value={newCustomer.customer_type} size={'small'} id="demo-simple-select-label">Customer Type</InputLabel>
                            <Select
                                value={newCustomer.customer_type}
                                title={'Customer Type'}
                                size={'small'}
                                name={'customer_type'}
                                onChange={updateNewCustomerState}
                            >
                                {
                                    !customerType ? (
                                        <MenuItem ></MenuItem>
                                    ) :
                                        customerType.map((c_type) => {
                                            return (
                                                <MenuItem key={c_type.type_name} value={c_type.type_name}>{c_type.type_name}</MenuItem>
                                            )
                                        })
                                }

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <h4 style={{ margin: 0}}>Personal Information</h4>
                    </Grid>
                    {/* First Row - First Name, Last Name and Middle Name */}
                    <Grid item xs={12} sm={5}>
                        <TextField
                            required
                            label={'First Name'}
                            name={'firstname'}
                            size={'small'}
                            value={newCustomer.firstname}
                            onChange={updateNewCustomerState}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <TextField
                            label={'Last Name'}
                            name={'lastname'}
                            size={'small'}
                            value={newCustomer.lastname}
                            onChange={updateNewCustomerState}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            required
                            label={'M.I.'}
                            name={'middle_name'}
                            size={'small'}
                            value={newCustomer.middle_name}
                            onChange={updateNewCustomerState}
                            fullWidth
                        />
                    </Grid>
                    {/* Second Row - Address */}
                    <Grid item xs={12} sm={3}>
                        {
                            !provinces ? (
                                <TextField
                                    label={'Province'}
                                    name={'barangay'}
                                    size={'small'}
                                    value={newCustomer.barangay}
                                    onChange={updateNewCustomerState}
                                    fullWidth
                                />
                            ) : (
                                <FormControl variant="outlined" fullWidth size={'small'}>
                                    <InputLabel id="province-label">Province</InputLabel>
                                    <Select
                                        labelId="province-label"
                                        id="province"
                                        value={selectedProvince}
                                        onChange={handleProvinceChange}
                                        label="Province"
                                    >
                                        <MenuItem value="">
                                            <em>Select Province</em>
                                        </MenuItem>
                                        {provinces.map((province) => (
                                            <MenuItem key={province.id} value={province.id}>{province.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            )
                        }
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        {
                            !provinces ? (
                                <TextField
                                    label={'Municipality'}
                                    name={'barangay'}
                                    size={'small'}
                                    value={newCustomer.barangay}
                                    onChange={updateNewCustomerState}
                                    fullWidth
                                />
                            ) : (
                                <FormControl variant="outlined">
                                    <InputLabel id="municipality-label">Municipality</InputLabel>
                                    <Select
                                        labelId="municipality-label"
                                        id="municipality"
                                        value={selectedMunicipality}
                                        onChange={handleMunicipalityChange}
                                        label="Municipality"
                                        disabled={!selectedProvince}
                                    >
                                        <MenuItem value="">
                                            <em>Select Municipality</em>
                                        </MenuItem>
                                        {municipalities.map((municipality) => (
                                            <MenuItem key={municipality.id} value={municipality.id}>{municipality.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            )
                        }
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            label={'Barangay'}
                            name={'barangay'}
                            size={'small'}
                            value={newCustomer.barangay}
                            onChange={updateNewCustomerState}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            label={'Block/Street'}
                            name={'block_street'}
                            size={'small'}
                            value={newCustomer.block_street}
                            onChange={updateNewCustomerState}
                            fullWidth
                        />
                    </Grid>
                    {/* Third Row - Date of Birth, Place of Birth, Sex, Citizenship */}
                    <Grid item xs={12} sm={3}>
                        <DatePicker
                            label={'Date of Birth'}
                            name={'date_of_birth'}
                            slotProps={{ textField: { size: 'small' } }}
                            value={newCustomer.date_of_birth}
                            onChange={updateNewCustomerState}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label={'Place of Birth'}
                            name={'place_of_birth'}
                            size={'small'}
                            value={newCustomer.place_of_birth}
                            onChange={updateNewCustomerState}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControl fullWidth>
                            <InputLabel value={newCustomer.sex} size={'small'} id="demo-simple-select-label">Sex</InputLabel>
                            <Select
                                value={newCustomer.sex}
                                title={'Sex'}
                                size={'small'}
                                name={'sex'}
                                onChange={updateNewCustomerState}
                            >
                                <MenuItem value={'Male'}>Male</MenuItem>
                                <MenuItem value={'Female'}>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            label={'Citizenship'}
                            name={'citizenship'}
                            size={'small'}
                            value={newCustomer.citizenship}
                            onChange={updateNewCustomerState}
                            fullWidth
                        />
                    </Grid>
                    {/*  Fourth Row - Occupation, TIN  */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label={'Occupation'}
                            name={'occupation'}
                            size={'small'}
                            value={newCustomer.occupation}
                            onChange={updateNewCustomerState}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label={'T.I.N.'}
                            name={'tin'}
                            size={'small'}
                            value={newCustomer.tin}
                            onChange={updateNewCustomerState}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <h4 style={{ margin: 0}}>Corporate Information</h4>
                    </Grid>
                    {/* First Row - First Name, Last Name and Middle Name */}
                    <Grid item xs={12} sm={8}>
                        <TextField
                            required
                            label={'Company Name'}
                            name={'company_name'}
                            size={'small'}
                            value={newCustomer.company_name}
                            onChange={updateNewCustomerState}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            label={'Address'}
                            name={'company_address'}
                            size={'small'}
                            value={newCustomer.company_address}
                            onChange={updateNewCustomerState}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label={'Nature of Business'}
                            name={'business_nature'}
                            size={'small'}
                            value={newCustomer.business_nature}
                            onChange={updateNewCustomerState}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button
                    color={'error'}
                    onClick={() => setShowCustomerModal(false)}
                >Close</Button>
                <Button variant={'contained'} color={'primary'} >Submit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default NewCustomerModal
