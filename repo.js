const feedbackKey = "feedback";

function saveFeedbackInStorage(nameProductIn, feedbackIn) {
  if (localStorage.getItem(feedbackKey)) {
    const feedbackList = JSON.parse(localStorage.getItem(feedbackKey));
    let index = -1;
    for (let i = 0; i < feedbackList.length; i++) {
      if (feedbackList[i].nameProduct === nameProductIn) {
        index = i;
      }
    }

    if (index === -1) {
      feedbackList.push({ nameProduct: nameProductIn, feedback: [feedbackIn] });
    } else {
      feedbackList[index].feedback.push(feedbackIn);
    }
    localStorage.setItem(feedbackKey, JSON.stringify(feedbackList));
  } else {
    localStorage.setItem(
      feedbackKey,
      JSON.stringify([{ nameProduct: nameProductIn, feedback: [feedbackIn] }])
    );
  }
}

function productFromStorage() {
  const feedbackList = JSON.parse(localStorage.getItem(feedbackKey));
  return feedbackList;
}
