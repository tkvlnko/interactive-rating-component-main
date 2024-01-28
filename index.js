const state = {
    activeId: null,
};

const handleForm = () => {
    
    const render = (state) => {
        const allbuttons = document.querySelectorAll('input');
        const buttonSubmit = document.querySelector('button');
        allbuttons.forEach((button) => {
            if (button.value == state.activeId) {
                button.classList.add('input-active');
            } else {
                button.classList.remove('input-active');
            }
        });
        if (state.activeId) {
            buttonSubmit.removeAttribute('disabled');
        }
    };

    const renderSubmit = (newState) => {
        alert(JSON.stringify(newState))

        const rating = document.querySelector('.rating-component');
        const thnx = document.querySelector('.thank-you');
        const p = document.createElement("p");
        thnx.appendChild(p);
        const span = document.createElement("span");
        p.appendChild(span);

        span.innerText = `You selected ${state.activeId} out of 5`;

        rating.classList.add('hidden');
        thnx.classList.remove('hidden');
    };

    const form = document.querySelector('form');
    const sumbitButton = document.querySelector('button')

    form.addEventListener('click', (e) => {
        state.activeId = e.target.value;
        render(state);
    });

    sumbitButton.addEventListener('click', (e) => {
        e.preventDefault();
        renderSubmit(state);
    });
};

handleForm();
