import {faker} from '@faker-js/faker';
import { UserEntity, UserProps} from '../../user.entity';

describe("UserEntity unit test", () => {

  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }
    sut = new UserEntity(props);
  })

  it("constructor method", () => {

    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.craetedDate).toBeInstanceOf(Date);
  })
})
