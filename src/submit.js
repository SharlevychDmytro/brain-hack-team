      (() => {
        document
          .querySelector('.modal-form')
          .addEventListener('submit', e => {
            e.preventDefault();

            new FormData(e.currentTarget).forEach((name) =>
              console.log(name),
            );

            e.currentTarget.reset();
          });
      })();
