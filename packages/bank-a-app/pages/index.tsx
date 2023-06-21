import { MortgageCalculator } from '@banking-web-apps/shared/ui';
import styles from './index.module.css';

export function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>Welcome to BankA</h1>
          </div>

          <div id="middle-content">
            <MortgageCalculator />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
