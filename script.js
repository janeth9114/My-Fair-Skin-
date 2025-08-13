<!-- Your other HTML content -->

<script>
  const searchInput = document.getElementById('search-input');
  const searchList = document.getElementById('search-list');
  const items = searchList.getElementsByTagName('li');

  searchInput.addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    
    for (let i = 0; i < items.length; i++) {
      const text = items[i].textContent.toLowerCase();
      if (text.includes(filter)) {
        items[i].style.display = '';
      } else {
        items[i].style.display = 'none';
      }
    }
  });
</script>
</body>
