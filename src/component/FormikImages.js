import {useEffect, useState} from 'react';
import {useFormikContext} from 'formik';

function FormikImage({label, avatar = '', ...props}) {
    const formikProps = useFormikContext();
    const [selectedImage, setSelectedImage] = useState({
        file: '',
        imagePreviewUrl: avatar
    });

    useEffect(() => {
        formikProps.setFieldValue('avatar', avatar);
    }, []);

    const {id, name} = props;

    function handleImageChange(event) {
        event.preventDefault();

        let reader = new FileReader();
        const file = event.target.files[0];

        formikProps.setFieldValue('avatar', file);

        reader.onloadend = () => {
            setSelectedImage({
                file,
                imagePreviewUrl: reader.result
            });
        };

        reader.readAsDataURL(file);
    }

    return (
        <div className="form-group">
            <div>
                <label className="btn btn-accent" htmlFor={id || name}>
                    <input className="d-none" {...props} id={name}
                           onChange={(e) => handleImageChange(e)}/>
                    <span>{label}</span>
                </label>
                {selectedImage.imagePreviewUrl &&
                <img src={avatar} alt=""/>
                }
            </div>
        </div>
    );
}

export default FormikImage;
