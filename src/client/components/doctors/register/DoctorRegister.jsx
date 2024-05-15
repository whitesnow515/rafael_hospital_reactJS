
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import camera from '../../../assets/images/icons/camera.svg';
import file from '../../../assets/images/icons/file.svg';
import file_optional from '../../../assets/images/icons/file_optional.svg';
import male from '../../../assets/images/icons/male.png';
import female from '../../../assets/images/icons/female.png';
import { provincias } from '../../../assets/js/lugares.js';
import thumbsUp from '../../../assets/images/icons/thumbs-up.svg';

const especialidadesMedicas = [
    "Anatomía Patológica",
    "Anestesiología",
    "Audiología, Otoneurología y Foniatría",
    "Calidad de la Atención Clínica",
    "Cirugía General",
    "Epidemiología",
    "Genética Médica",
    "Geriatría",
    "Ginecología y Obstetricia",
    "Imagenología Diagnóstica y Terapéutica",
    "Medicina de la Actividad Física y Deportiva",
    "Medicina de Rehabilitación",
    "Medicina de Urgencias",
    "Medicina del Trabajo y Ambiental",
    "Medicina Familiar",
    "Medicina Interna",
    "Medicina Legal",
    "Medicina Nuclear e Imagenología Molecular",
    "Medicina Preventiva",
    "Neumología",
    "Oftalmología",
    "Otorrinolaringología y Cirugía de Cabeza y Cuello",
    "Patología Clínica",
    "Pediatría",
    "Psiquiatría",
    "Radio Oncología",
    "Traumatología y Ortopedia"
];

const PatientRegister = () => {
    const [step, setStep] = useState(1);
    const [stepOneData, setStepOneData] = useState({
        cedula: '',
        cedulaFoto: undefined
    });
    const [stepTwoData, setStepTwoData] = useState({
        sexo: '',
        nombreCompleto: '',
        correoElectronico: '',
        contrasena: '',
        contrasenaVerificacion: '',
        telefono: '',
        edad: '',
    });
    
    const [provinciaSeleccionada, setProvinciaSeleccionada] = useState('');
    const [ciudades, setCiudades] = useState([]);

    const nextStep = () => {
        if (step < 5) {
            setStep(step + 1);
        }
        console.log(stepOneData)
        console.log(stepTwoData)
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleProvinciaChange = (event) => {
        const provincia = event.target.value;
        setProvinciaSeleccionada(provincia);
        setCiudades(provincias[provincia] || []);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className="profile-pic-col">
                            <h3>Numero de identificación</h3>
                            <div className="profile-pic-upload">
                                <div className="cam-col">
                                    <img
                                        src={stepOneData.cedulaFoto ? thumbsUp : camera}
                                        id="prof-avatar"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <span>{stepOneData.cedulaFoto ? "Click para subir un archivo diferente" : "Subir foto de identificación"}</span>
                                <input
                                    type="file"
                                    id="profile_image"
                                    name="profile_image"
                                    accept=".pdf, image/*"
                                    onChange={(event)=> {
                                        const selectedFile = event.target.files[0];
                                        if(selectedFile){
                                            setStepOneData({
                                                ...stepOneData,
                                                cedulaFoto: selectedFile
                                            });
                                        }
                                    }}
                                />
                            </div>

                            <div className="form-group mt-2">
                                <input
                                    type="text"
                                    name="age"
                                    className="form-control"
                                    id="age"
                                    value={stepOneData.cedula}
                                    maxLength={10}
                                    placeholder="Ingrese su número de cédula"
                                    onChange={(e)=> {
                                        setStepOneData({
                                            ...stepOneData,
                                            cedula: e.target.value
                                        });
                                    }}

                                />
                            </div>
                        </div>
                        <div className="mt-2">
                            <button
                                onClick={nextStep}
                                className="btn btn-primary w-100 btn-lg login-btn step1_submit"
                            >
                                Continuar{" "}
                            </button>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="text-start mt-2">
                            <h4 className="mt-3">Select Your Gender</h4>
                        </div>
                        <div className="select-gender-col">
                            <div className="row">
                                <div className="col-6 pe-0" onClick={() => {
                                    setStepTwoData({
                                        ...stepTwoData,
                                        sexo: 'masculino'
                                    })
                                }}>
                                    <input
                                        type="radio"
                                        id="test1"
                                        name="gender"
                                        defaultValue="Male"
                                    />
                                    <label htmlFor="test1">
                                        <span className="gender-icon">
                                            <img src={male} alt="" />
                                        </span>
                                        <span>Doctor</span>
                                    </label>
                                </div>
                                <div className="col-6 ps-2" onClick={() => {
                                    setStepTwoData({
                                        ...stepTwoData,
                                        sexo: 'femenino'
                                    })
                                }}>
                                    <input
                                        type="radio"
                                        id="test2"
                                        name="gender"
                                        defaultValue="Female"
                                    />
                                    <label htmlFor="test2">
                                        <span className="gender-icon">
                                            <img src={female} alt="" />
                                        </span>
                                        <span>Doctora</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="step-process-col mt-4">


                            <div className="form-group card-label">
                                <label>Nombre completo</label>
                                <input
                                    type="text"
                                    name="nombre_completo"
                                    value={stepTwoData.nombreCompleto}
                                    className="form-control"
                                    id="nombre_completo"
                                    onChange={(e)=> {
                                        setStepTwoData({
                                            ...stepTwoData,
                                            nombreCompleto: e.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group card-label">
                                <label>Correo Electronico</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={stepTwoData.correoElectronico}
                                    className="form-control"
                                    id="email"
                                    onChange={(e)=> {
                                        setStepTwoData({
                                            ...stepTwoData,
                                            correoElectronico: e.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group card-label">
                                <label>Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={stepTwoData.contrasena}
                                    className="form-control"
                                    id="password"
                                    onChange={(e)=> {
                                        setStepTwoData({
                                            ...stepTwoData,
                                            contrasena: e.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group card-label">
                                <label>Repetir contraseña</label>
                                <input
                                    type="password"
                                    name="repeat_password"
                                    value={stepTwoData.contrasenaVerificacion}
                                    className="form-control"
                                    id="repeat_password"
                                    onChange={(e)=> {
                                        setStepTwoData({
                                            ...stepTwoData,
                                            contrasenaVerificacion: e.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group card-label">
                                <label>Telefono</label>
                                <input
                                    type="phone"
                                    name="phone"
                                    value={stepTwoData.telefono}
                                    className="form-control"
                                    id="phone"
                                    onChange={(e)=> {
                                        setStepTwoData({
                                            ...stepTwoData,
                                            telefono: e.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group card-label">
                                <label>Edad</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={stepTwoData.edad}
                                    className="form-control"
                                    id="age"
                                    onChange={(e)=> {
                                        setStepTwoData({
                                            ...stepTwoData,
                                            edad: e.target.value
                                        });
                                    }}
                                />
                            </div>

                        </div>
                        <div className="mt-5">
                            <button
                                onClick={nextStep}
                                className="btn btn-primary w-100 btn-lg login-btn step2_submit"
                            >
                                Continuar{" "}
                            </button>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className="text-start mt-2">
                            <h4 className="mt-3">Documentación Profesional Requerida</h4>
                        </div>

                        <div className="form-group">
                            <label>Seleccione su especialidad</label>

                            <select
                                className="form-select form-control mt-1"
                                id="heart_rate"
                                name="heart_rate"
                                tabIndex={-1}
                                aria-hidden="true"
                            >
                                <option value="">Medicina General</option>

                                {especialidadesMedicas.map((especialidad, index) => (
                                    <option value={especialidad}>{especialidad}</option>
                                ))}
                            </select>
                        </div>



                        <div className="step-process-col mt-4">


                            <div className="form-group">
                                <label>Aporta documentación: </label>
                                <div className="row justify-content-center">

                                    <div className="col-12 col-md-6 d-flex">
                                        <div className="profile-pic-upload d-flex flex-wrap justify-content-center">
                                            <div className="cam-col">
                                                <img src={file} alt="" />
                                            </div>
                                            <span className="text-center">
                                                Titulo de Medicina, credenciales, etc.
                                            </span>
                                            <input
                                                type="file"
                                                id="photo_id"
                                                name="photo_id"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 d-flex">
                                        <div className="profile-pic-upload d-flex flex-wrap justify-content-center">
                                            <div className="cam-col">
                                                <img src={file_optional} alt="" />
                                            </div>
                                            <span className="text-center">
                                                [Opcional] Agrega mas documentos

                                            </span>
                                            <input
                                                type="file"
                                                id="clinical_employment"
                                                name="clinical_employment"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="mt-5">
                            <button
                                onClick={nextStep}
                                className="btn btn-primary w-100 btn-lg login-btn step3_submit"
                            >
                                Continuar{" "}
                            </button>
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <h3 className="my-4">Ubicacion de tu consultorio</h3>

                        <div className="form-group">
                            <label>Seleccionar provincia</label>
                            <select
                                value={provinciaSeleccionada}
                                onChange={handleProvinciaChange}
                                className="form-select form-control"
                            >
                                <option value="">Seleccione una provincia</option>
                                {Object.keys(provincias).map((provincia) => (
                                    <option key={provincia} value={provincia}>{provincia}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Seleccionar ciudad</label>
                            <select disabled={!provinciaSeleccionada} className="form-select form-control">
                                <option value="">Seleccione una ciudad</option>
                                {ciudades.map((ciudad) => (
                                    <option key={ciudad} value={ciudad}>{ciudad}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-5">
                            <button
                                onClick={() => { }}
                                className="btn btn-primary w-100 btn-lg login-btn step5_submit"
                            >
                                Continuar{" "}
                            </button>
                        </div>
                    </>
                )
            default:
                return <div>Unknown step</div>;
        }
    };

    return (
        <>
            {/* Page Content */}
            <div className="content login-page pt-0">
                <div className="container-fluid">
                    {/* Register Content */}
                    <div className="account-content">
                        <div className="row align-items-center m-0">
                            <div className="login-right m-0">
                                <div className="inner-right-login">
                                    <div className="login-header">
                                        <div className="logo-icon">
                                            <img src={Logo} alt="" />
                                        </div>
                                        <div className="step-list">
                                            <ul>
                                                <li>
                                                    <Link to="#" className={step > 1 ? "active-done" : "active"}>
                                                        1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className={step === 2 ? "active" : step > 2 ? "active-done" : ""}>
                                                        2
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className={step === 3 ? "active" : step > 3 ? "active-done" : ""}>
                                                        3
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className={step === 4 ? "active" : step > 4 ? "active-done" : ""}>
                                                        4
                                                    </Link>
                                                </li>

                                            </ul>

                                        </div>
                                        {renderStep()}
                                    </div>
                                </div>
                                <div className="login-bottom-copyright">
                                    <span>© 2022 Doccure. All rights reserved.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Register Content */}
                </div>
            </div>
            {/* /Page Content */}
        </>

    );
};

export default PatientRegister;
