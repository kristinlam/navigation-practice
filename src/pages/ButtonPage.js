import Button from '../components/Button';

const ButtonPage = () => {
  return (
    <div>
      <Button primary rounded outline>
        Primary
      </Button>
      <Button secondary rounded>
        Secondary
      </Button>
      <Button success outline>
        Success
      </Button>
      <Button warning>Warning</Button>
      <Button danger>Danger</Button>
    </div>
  );
};

export default ButtonPage;
