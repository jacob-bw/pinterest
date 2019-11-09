import $ from 'jquery';

const printToDom = (divId, toPrint) => {
  $(`#${divId}`).html(toPrint);
  console.log({ divId, toPrint });
};


export default { printToDom };
