// <!--페이지 맨위 버튼 시작-->

    document.addEventListener('DOMContentLoaded', function () {
    const scroll_top = document.getElementById('scroll_top');

    scroll_top.addEventListener('click', () => {

    window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});
});

// <!--페이지 맨위 버튼 완료-->
// <!--무한스크롤 자바스크립트 시작!-->

    const imgGrid = document.getElementById('img_grid');
    let pageToFetch = 1;

    async function fetchImages(pageNum) {
    try {
    const response = await fetch('https://picsum.photos/v2/list?page=' + pageNum + '&limit=6');
    if (!response.ok) {
    throw new Error('네트워크 응답에 문제가 있습니다.');
}

    const datas = await response.json();
    console.log(datas);

    showImages(datas);

} catch (error) {
    console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
}
}

    function showImages(datas) {
    datas.forEach((item) => {
        const imgElement = document.createElement('img');
        imgElement.src = item.download_url;
        imgElement.alt = '';
        imgGrid.appendChild(imgElement);
    });
}

    const showMoreButton = document.querySelector('.click');
    showMoreButton.addEventListener('click', () => {
    fetchImages(pageToFetch++);
});
// <!--무한스크롤 자바스크립트 완료!-->

// <!--modal 자바스크립트 시작!-->

    document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const btn_open_modal = document.querySelector('.click2');
    const btn_close_modal = document.querySelector('.btn_close_modal');

    btn_open_modal.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

    btn_close_modal.addEventListener('click', () => {
    modal.classList.add('hidden');
});
});
// <!--모달창 자바스크립트 완료!-->