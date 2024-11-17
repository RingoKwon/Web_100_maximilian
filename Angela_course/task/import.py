import re
import requests
from bs4 import BeautifulSoup
import os
import uuid  # UUID 모듈 추가

# 파일 경로
file_path = 'task/mb_links.txt'  # 링크가 저장된 파일
output_dir = 'task/links_content'  # 결과를 저장할 디렉토리

# 디렉토리 생성
os.makedirs(output_dir, exist_ok=True)

# 하이퍼링크를 추출하는 함수
def extract_links(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
        # 정규 표현식을 사용하여 하이퍼링크 추출
        links = re.findall(r'mb://[^\s]+', content)
        return links

# 링크에서 텍스트를 가져오고 파일로 저장하는 함수
def save_link_content(links):
    for link in links:
        # mb://를 http://로 변환하여 요청
        url = link.replace('mb://', 'http://')
        try:
            response = requests.get(url)
            response.raise_for_status()  # 요청이 성공했는지 확인

            # BeautifulSoup을 사용하여 HTML에서 텍스트 추출
            soup = BeautifulSoup(response.text, 'html.parser')
            text_content = soup.get_text()

            # 고유 ID 생성
            unique_id = str(uuid.uuid4())
            file_name = os.path.join(output_dir, f"{unique_id}.txt")
            with open(file_name, 'w', encoding='utf-8') as output_file:
                output_file.write(text_content)

            print(f"'{file_name}' 파일이 생성되었습니다.")

        except Exception as e:
            print(f"'{url}' 링크를 열 수 없습니다: {e}")

# 링크 추출 및 내용 저장
links = extract_links(file_path)
save_link_content(links)