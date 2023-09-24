export type UserProps = {
  name: string,
  email: string,
  password: string,
  craetedDate?: Date
}

export class UserEntity {
  constructor(public readonly props: UserProps){
    this.props.craetedDate = this.props.craetedDate ?? new Date();
  }
}
