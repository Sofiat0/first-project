const openModalButton =
    document.getElementById("openModal");

const closeModalButton =
    document.getElementById("closeModal");

const cancelModalButton =
    document.getElementById("cancelModal");

const transactionModal =
    document.getElementById("transactionModal");

const transactionForm =
    document.getElementById("transactionForm");

function openModal() {

    transactionModal.style.display = "flex";

}

function closeModal() {

    transactionModal.style.display = "none";

}

function saveTransaction(event) {

    event.preventDefault();

    const title =
        document.getElementById("transactionTitle").value;

    const type =
        document.getElementById("transactionType").value;

    const category =
        document.getElementById("transactionCategory").value;

    const amount =
        document.getElementById("transactionAmount").value;

    const date =
        document.getElementById("transactionDate").value;

    if (
        title === "" ||
        amount === "" ||
        date === ""
    ) {

        alert("Please fill in all required fields.");

        return;

    }

    alert(
        `Transaction saved!\n\n` +
        `Title: ${title}\n` +
        `Type: ${type}\n` +
        `Category: ${category}\n` +
        `Amount: ₦${amount}\n` +
        `Date: ${date}`
    );

    transactionForm.reset();
    closeModal();

}

openModalButton.addEventListener(
    "click",
    openModal
);
closeModalButton.addEventListener(
    "click",
    closeModal
);
cancelModalButton.addEventListener(
    "click",
    closeModal
);
transactionForm.addEventListener(
    "submit",
    saveTransaction
);

transactionModal.addEventListener(
    "click",
    function (event) {
        if (event.target === transactionModal) {
            closeModal();
        }
    }
);