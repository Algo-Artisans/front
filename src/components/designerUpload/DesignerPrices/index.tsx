import InputFieldSmall from '../InputFieldSmall';
import AddIcon from '../../../../public/assets/icons/add_16.svg';

import React, { useState } from 'react';
import CTAButton from '@/components/common/CTAButton';
import Title from '@/components/common/Title';

interface DesignerPricesProps {
  onNext: (data: { [key: string]: string }) => void;
}

export default function DesignerPrices({ onNext }: DesignerPricesProps) {
  const [inputFields, setInputFields] = useState([{ styling: '', cost: '' }]);

  const handleClickCTAButton = () => {
    const data: { [key: string]: string } = {};
    for (let i = 0; i < 4; i++) {
      const styling = inputFields[i]?.styling || '';
      const cost = inputFields[i]?.cost || '';
      data[`styling${i + 1}`] = styling;
      data[`cost${i + 1}`] = cost;
    }
    onNext(data);
  };

  const handleInputChange = (
    index: number,
    fieldName: string,
    value: string,
  ) => {
    const newInputFields: { styling: string; cost: string }[] = [
      ...inputFields,
    ];
    newInputFields[index] = { ...newInputFields[index], [fieldName]: value };
    setInputFields(newInputFields);
  };

  const handleAddInput = () => {
    if (inputFields.length < 4) {
      setInputFields([...inputFields, { styling: '', cost: '' }]);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full relative">
      <div className="w-full flex flex-col items-center gap-[85px] mb-[60px]">
        <Title className="w-full">
          고객 분들이 참고할 수 있는 <br />
          <span className="text-primary-300">가격표</span>가 있다면,
          작성해주세요.
        </Title>
      </div>
      <div className="flex flex-col h-full gap-y-[34px] items-center">
        <div className="flex flex-col w-full gap-y-[15px]">
          <p className="caption-16 text-white text-left">가격 입력</p>
          <p className="caption-12 text-grey-300 text-left">
            디자이너님의 헤어스타일 가격대를{' '}
            <span className="text-primary-300">4개까지</span> 작성해주세요.
          </p>
        </div>
        {inputFields.map((inputField, index) => (
          <div key={index} className="flex w-full gap-x-[22px]">
            <InputFieldSmall
              value={inputField.styling}
              onChange={(value) => handleInputChange(index, 'styling', value)}
              placeholder="일반펌"
            />
            <InputFieldSmall
              value={inputField.cost}
              onChange={(value) => handleInputChange(index, 'cost', value)}
              placeholder="20,000원 ~"
            />
          </div>
        ))}
        <button onClick={handleAddInput}>
          <AddIcon className="fill-white" />
        </button>
      </div>

      <CTAButton
        size="large"
        disabled={inputFields.length <= 1}
        onClick={handleClickCTAButton}
        className="absolute bottom-[40px]"
      >
        다음으로
      </CTAButton>
    </div>
  );
}
