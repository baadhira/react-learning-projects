import React, { useState } from 'react';
 
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    interests: [],
    errors: {}
  });
 console.log(formData,'formData')
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(checked,'checked')
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        interests: checked
          ? [...prevData.interests, value]
          : prevData.interests.filter((interest) => interest !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
 
  const validate = () => {
    const errors = {};
if (!formData.name) errors.name = 'Name is required';
if (!formData.email) errors.email = 'Email is required';
    if (!formData.gender) errors.gender = 'Gender is required';
    if (formData.interests.length === 0) errors.interests = 'At least one interest must be selected';
    return errors;
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully', formData);
      setFormData({
        name: '',
        email: '',
        gender: '',
        interests: [],
        errors: {}
      });
    } else {
      setFormData({ ...formData, errors });
    }
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
value={formData.name}
            onChange={handleChange}
          />
        </label>
{formData.errors.name}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
value={formData.email}
            onChange={handleChange}
          />
        </label>
{formData.errors.email}
      </div>
      <div>
        <label>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>
        </label>
        {formData.errors.gender && <p>{formData.errors.gender}</p>}
      </div>
      <div>
        <label>
          Interests:
          <label>
            <input
              type="checkbox"
              name="interests"
              value="coding"
              checked={formData.interests.includes('coding')}
              onChange={handleChange}
            />
            Coding
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="music"
              checked={formData.interests.includes('music')}
              onChange={handleChange}
            />
            Music
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="sports"
              checked={formData.interests.includes('sports')}
              onChange={handleChange}
            />
            Sports
          </label>
        </label>
        {formData.errors.interests && <p>{formData.errors.interests}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
 
export default Form;