import React from 'react';

const InstitutePicker = () => {
  return (
    <Picker
      style={{width: '80%'}}
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};

export default InstitutePicker;
