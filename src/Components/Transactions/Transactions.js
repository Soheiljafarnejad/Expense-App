const Transactions = ({ transActions }) => {
  return (
    <section>
      <h2>Transactions:</h2>
      {transActions.map((item) => {
        return (
          <div>
            <p>{item.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Transactions;
