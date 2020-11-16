import React from 'react';
import { render } from '@testing-library/react-native';

import PetImageSet from './PetImageSet';

import myPet from '../../../__fixtures__/myPet';

function renderPetImageSet(data = myPet[0]) {
  return render(<PetImageSet data={data} />);
}

describe('PetImageSet', () => {
  it('renders without exploding', () => {
    const { container } = renderPetImageSet();

    expect(container).toBeTruthy();
  });

  it('renders image properly', () => {
    const { getByTestId } = renderPetImageSet();

    expect(getByTestId('test-profile-pet-image')).toBeTruthy();
  });

  context('when pass props', () => {
    it('renders each myPet data properly', () => {
      myPet.forEach((value) => {
        const { container } = renderPetImageSet(value);

        expect(container).toBeTruthy();
      });
    });
  });
});
