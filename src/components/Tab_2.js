import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useForm } from "react-hook-form";
import cow from '../img/cow.png';
import goat from '../img/goat.png';
import sheep from '../img/sheep.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tab_2 = (props) => {

    const {
        register,
        setValue,
        handleSubmit,
        watch,
        formState: { error },
    } = useForm();
    const onSubmit = (data) => {
        if (props.showDelivery) {
            let name = document.querySelector("#full-name");
            let contact = document.querySelector(".contact input[type='hidden']");
            let email = document.querySelector("#email");
            let country = document.querySelector("#country");
            let address = document.querySelector("#address");
            let postal_code = document.querySelector("#postal-code");
            let nearby_landmark = document.querySelector("#nearby-landmark");

            if (name.value === "") {
                toast.error("Please Add Your Full Name");
            } else if (contact.value.length < 6) {
                toast.error("Please add you correct phone number");
            } else if (email.value === "") {
                toast.error("Please add your email address");
            }
            else if (country.value === "Select Your Country") {
                toast.error("Please Select Your Country");
            }
            else if (address.value === "") {
                toast.error("Please add your address");
            }
            else if (postal_code.value === "") {
                toast.error("Please add your postal code");
            }
            else if (nearby_landmark.value === "") {
                toast.error("Please add your nearby landmark");
            }
            else {
                props.set_form_tab2(data);
                paument_popup_open();
                loadDetails();
            }
        } else {
            let name = document.querySelector("#full-name");
            let contact = document.querySelector(".contact input[type='hidden']");
            let email = document.querySelector("#email");
            if (name.value === "") {
                toast.error("Please Add Your Full Name");
            } else if (contact.value.length < 6) {
                toast.error("Please add you correct phone number");
            } else if (email.value === "") {
                toast.error("Please add your email address");
            }
            else {
                props.set_form_tab2(data);
                paument_popup_open();
                loadDetails();
            }
        }

    }

    setValue('delivery_charges', props.dc);
    setValue('total', (Number(props.form_val_1.price) * Number(props.form_val_1.quantity)) + Number(props.dc) + " " + localStorage.getItem("currency"))

    const {
        register: registerForm2,
        handleSubmit: handleSubmitForm2,
        formState: { errors: errorsForm2 }
    } = useForm();
    const onSubmitForm2 = (data) => {
        // let file = document.querySelector("#attachment");
        // props.set_form_tab3(file.value);
        props.sendForm(props.formData);
        // payment_submit();
    };

    const renderText = () => {
        if (props.form_val_1.animal == "goat") {
            return goat;
        } else if (props.form_val_1.animal == "sheep") {
            return sheep;
        } else {
            return cow;
        }
    }


    function send_country() {
        let country_val = document.querySelector(".country select").value;
        props.set_delivery_charges(country_val);

    }



    function countryDrop() {
        let alive_slotter = document.querySelector(".alive-slotter select");
        let country = document.querySelector("#country");
        if (alive_slotter.value == "Alive") {
            country.innerHTML = "<option>Select Your Country</option><option value='Pakistan'>Pakistan</option>"
        }
        else {
            country.innerHTML = `
            <option>Select Your Country</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote D'ivoire">Cote D'ivoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">French Southern Territories</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guernsey">Guernsey</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-bissau">Guinea-bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jersey">Jersey</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
            <option value="Korea, Republic of">Korea, Republic of</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macao">Macao</option>
            <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
            <option value="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Helena">Saint Helena</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
            <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-leste">Timor-leste</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="Virgin Islands, British">Virgin Islands, British</option>
            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
            <option value="Wallis and Futuna">Wallis and Futuna</option>
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
            `
        }
    }
    function addSlash() {
        let expiry_date = document.getElementById("expiry_date");
        if (expiry_date.value.length === 2) {
            expiry_date.value = expiry_date.value + '/'

        } else if (expiry_date.value.length === 3 && expiry_date.value.charAt(2) === '/') {
            expiry_date.value = expiry_date.value.replace('/', '');
        }
    }
    function paument_popup_open() {
        let payment_modal = document.querySelector(".payment_modal").style.display = "flex";
    }
    function paument_popup_close() {
        let payment_modal = document.querySelector(".payment_modal").style.display = "none"
    }
    // function payment_submit() {
    //     let card_number = document.getElementById("card_number");
    //     let expiry_date = document.getElementById("expiry_date");
    //     let card_code = document.getElementById("card_code");
    //     if (card_code.value == "" || card_number.value == '' || expiry_date.value == '') {
    //         console.log("something is empty");
    //     }

    // }
    const [contact, setContact] = useState("");
    const [altContact, setAltContact] = useState("");
    function setaltcontact() {
        let item = document.querySelector(".altContact input[type='tel']");
        let hiddenAlt = document.querySelector("#hiddenAltContact");
        setAltContact(item.value);
        hiddenAlt.value = altContact;
        const newValue = altContact;
        setValue('alternate_contact', newValue);
    }
    function set_Contact() {
        let item = document.querySelector(".contact input[type='tel']");
        let hiddenContact = document.querySelector("#hiddenContact");
        setContact(item.value);
        hiddenContact.value = contact;
        const newValue = contact;
        setValue('contact', newValue);
    }
    const [bankDetails, setBankDetails] = useState(0);
    useEffect(() => {

        let elem = document.querySelector(".bank-details");
        if (bankDetails !== 0) {
            // console.log(bankDetails.data);
            elem.innerHTML = `<div className='bank-details'>
        <p>Account Title: <span class="acc-details">${bankDetails.data[0].account_title}</span></p>
        <p>Branch Code: <span class="acc-details">${bankDetails.data[0].branch_code}</span></p>
        <p>Account Number: <span class="acc-details">${bankDetails.data[0].account_number}</span></p>
        <p>IBAN: <span class="acc-details">${bankDetails.data[0].iban_number}</span></p>
        <p>Note: <span class="acc-details">${bankDetails.data[0].details}</span></p>
       </div>`;
        }
    }, [bankDetails]);
    async function loadDetails() {
        try {
            const response = await fetch("https://myzabiha.com/web_app/public/api/getBankAccounts");
            const details = await response.json();
            await setBankDetails(details);

        }
        catch (error) {
            alert("Sorry for the inconvenience, We Are facing some issues from Server");
        }
    }


    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        props.uploadImage(selectedFile);
    }    
    console.log('filefile',file)
    return (
        <>

            <div className='payment_modal'>
                <div className='payment_popup'>
                    <div className='payment_popup_close' onClick={() => { paument_popup_close() }}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <p>Account Details:</p>
                    <div className='bank-details'>
                        {/* <p>Account Title: {bankDetails[0].account_title}</p>
                    <p>Account Number: {bankDetails[0].account_number}</p>
                    <p>IBAN: {bankDetails[0].iban_number}</p> */}
                    </div>
                    <form onSubmit={handleSubmitForm2(onSubmitForm2)} encType="multipart/form-data">
                        {/* <label htmlFor='card_number'>Card Number <span>*</span></label>
                        <input type='text' name='card_number' id='card_number' placeholder='1234 1234 1234 1234' maxLength={16} required />
                        <label htmlFor='expiry_date'>Expiry Date <span>*</span></label>
                        <input onChange={addSlash} type='text' name='expiry_date' id='expiry_date' placeholder='MM / YY' maxLength={5} required />
                        <label htmlFor='card_code'>Card Code <span>*</span></label>
                        <input type='text' name='card_code' id='card_code' placeholder='CVC' maxLength={3} required /> */}
                        <label htmlFor="attachment">Upload Screen Shot for Proof:</label>
                        <input type='file' id='attachment' onChange={handleFileChange}/>
                        <button className="continue" disabled={props.loading} type='submit'>{props.loading == true ? 'wait your order is processing': 'Submit Order' }</button>

                    </form>
                </div>
            </div>



            <div className="tab-2 cutomer_info">
                <form method="post" onSubmit={handleSubmit(onSubmit)} id='form-tab-2'>
                    <div className="container options">
                        <div className="row tab-2">
                            <div className="col-7">

                                <h2>Order Delivery Information</h2>
                                <h3>Customer Information</h3>
                                <div className="row">
                                    <input type="text" id="full-name" {...register("name")} placeholder="Full Name" />
                                </div>
                                <div className="row contact">
                                    <label>Contact Number:</label>
                                    <input type='hidden' id='hiddenContact' name='contact' {...register("contact")} value={contact} />
                                    <PhoneInput onChange={() => { set_Contact() }} country={'pk'} id="contact" placeholder="Contact Number" />
                                </div>
                                <div className="row altContact">
                                    <label>Alternate Contact Number:</label>
                                    <input type='hidden' id='hiddenAltContact' {...register("alternate_contact")} name='alternate_contact' value={altContact} />
                                    <PhoneInput onChange={() => { setaltcontact() }} country={'pk'} id="alt-contact" placeholder="Alternate Contact Number" />
                                </div>
                                <div className="row">
                                    <input type="email" {...register("email")} id="email" placeholder="Email Address" />
                                </div>
                                {/* <div className="row">
                                    <div className="col-6">
                                        <h3>Recipient Information</h3>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="check"><input type="checkbox" id="check" />Same as customer
                                            information</label>
                                    </div>

                                </div> */}
                                {/* <div className="row">
                                    <input type="text" name="recipient_fname" placeholder="Full Name" className="col-6" />
                                    <input type="text" name="recipient_lname" placeholder="Last Name" className="col-6" />
                                </div>
                                <div className="row">
                                    <input type="number" name="recipient_number" placeholder="Mobile Number" />


                                </div> */}

                                {props.showDelivery
                                    ? <><div className={"row alive-slotter showDelivery"}>
                                        <h3>How should we deliver your order?</h3>

                                        <p>Select Slaughter or Alive</p>

                                        <select {...register("slotter_Alive")} onChange={() => { countryDrop() }}>
                                            <option>
                                                Select Slaughtered or Alive
                                            </option>
                                            <option value="Slotter">
                                                Slaughtered
                                            </option>
                                            <option value="Alive">
                                                Alive
                                            </option>
                                        </select>

                                    </div>
                                        <h3>Delivery Address Details</h3>

                                        <div className="row country">
                                            <select {...register("country")} onChange={() => { send_country() }} name="country" id="country" className="col-12" >
                                                country.innerHTML = `
                                                <option>Select Your Country</option>
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Åland Islands">Åland Islands</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antarctica">Antarctica</option>
                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Aruba">Aruba</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bermuda">Bermuda</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Bouvet Island">Bouvet Island</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Cape Verde">Cape Verde</option>
                                                <option value="Cayman Islands">Cayman Islands</option>
                                                <option value="Central African Republic">Central African Republic</option>
                                                <option value="Chad">Chad</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Christmas Island">Christmas Island</option>
                                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                                <option value="Cook Islands">Cook Islands</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">Dominican Republic</option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                                <option value="Faroe Islands">Faroe Islands</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="French Guiana">French Guiana</option>
                                                <option value="French Polynesia">French Polynesia</option>
                                                <option value="French Southern Territories">French Southern Territories</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Gibraltar">Gibraltar</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Greenland">Greenland</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guadeloupe">Guadeloupe</option>
                                                <option value="Guam">Guam</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guernsey">Guernsey</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guinea-bissau">Guinea-bissau</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hong Kong">Hong Kong</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Isle of Man">Isle of Man</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jersey">Jersey</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                                <option value="Korea, Republic of">Korea, Republic of</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Macao">Macao</option>
                                                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Martinique">Martinique</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mayotte">Mayotte</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                                <option value="Moldova, Republic of">Moldova, Republic of</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montenegro">Montenegro</option>
                                                <option value="Montserrat">Montserrat</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Namibia">Namibia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherlands">Netherlands</option>
                                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                <option value="New Caledonia">New Caledonia</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="Niue">Niue</option>
                                                <option value="Norfolk Island">Norfolk Island</option>
                                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau">Palau</option>
                                                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Philippines">Philippines</option>
                                                <option value="Pitcairn">Pitcairn</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Puerto Rico">Puerto Rico</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Reunion">Reunion</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russian Federation">Russian Federation</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="Saint Helena">Saint Helena</option>
                                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                <option value="Saint Lucia">Saint Lucia</option>
                                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Serbia">Serbia</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                <option value="Swaziland">Swaziland</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Timor-leste">Timor-leste</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tokelau">Tokelau</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Emirates">United Arab Emirates</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="United States">United States</option>
                                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                                <option value="Uruguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Viet Nam">Viet Nam</option>
                                                <option value="Virgin Islands, British">Virgin Islands, British</option>
                                                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                <option value="Western Sahara">Western Sahara</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                                `
                                            </select>
                                            {/* <select name="city" id="city" className="col-6">
                                        <option value="India">Mumbai</option>
                                        <option value="India">Delhi</option>
                                    </select> */}
                                        </div>
                                        <div className="row">
                                            <input type="text" name="fullAddress" id="address" placeholder="Full Address" {...register("full_address")} />
                                        </div>
                                        <div className="row">
                                            <input type="text" name="postal_code" id="postal-code" placeholder="Postal Code" {...register("postal_address")} />
                                        </div>
                                        <div className="row">
                                            <input type="text" name="nearby_landmark" id="nearby-landmark" placeholder="Nearby Landmark" {...register("nearby_landmark")} />
                                        </div>
                                        <div className="row">
                                            <textarea name="special_instructions" id="" placeholder="Special Instructions" {...register("special_instructions")}></textarea>
                                        </div>
                                    </>
                                    : ""
                                }

                                <div className='row if-not'>
                                    <p>If the product/quantity is not available Add multiple choice option</p>
                                    <select {...register("if_not")} >
                                        <option value={"Remove it from my order"}>Remove it from my order</option>
                                        <option value={"Cancel my order"}>Cancel my order</option>
                                        <option value={"Call and confirm"}>Call and confirm</option>
                                    </select>
                                </div>
                                <div className="row move">
                                    <div className="col-5">
                                        <button className="back" onClick={props.backBtn}>Back</button>
                                    </div>
                                    <div className="col-7">
                                        <button className="continue" >Proceed with Payment</button>
                                        <ToastContainer />
                                    </div>
                                </div>

                            </div>
                            <div className="col-5">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><img src={renderText()} /> </td>
                                        </tr>
                                        <tr>
                                            <td><h3 className="summary"> Order Summary</h3></td>
                                        </tr>

                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="title">Animal Type:</td>
                                            <td className="data">{props.form_val_1.animal}</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Zabiha Type:</td>
                                            <td className="data">{props.form_val_1.type}</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Quantity:</td>
                                            <td className="data">{props.form_val_1.quantity}</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Distribute or Delivery:</td>
                                            <td className="data">{props.form_val_1.distribute_or_delivery}</td>
                                        </tr>
                                        <tr>
                                            <td className="title">Price:</td>
                                            <td className="data">
                                                <input type='hidden' {...register("delivery_charges")} value={props.form_val_1.price} />
                                                {props.form_val_1.price + " " + localStorage.getItem("currency")}
                                            </td>
                                        </tr>
                                        {/* <tr>
                                            <td className="title">Order Date:</td>
                                            <td className="data">27 February, 2024</td>
                                        </tr> */}
                                        <tr>
                                            <td className="title">Delivery Charges:</td>
                                            <td className="data d-charges">
                                                {props.dc == 0 ? "Select Country For Delivery Charges" : props.dc + " " + localStorage.getItem("currency")}
                                                {/* {props.dc} */}
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div style={{ marginTop: "30px", textAlign: "center" }}>
                                    <div className="title">Total Amount</div>
                                    <div className="amount">
                                        <input type='hidden' {...register("total")} />
                                        {(Number(props.form_val_1.price) * Number(props.form_val_1.quantity)) + Number(props.dc) + " " + localStorage.getItem("currency")}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


        </>
    )
}

export default Tab_2