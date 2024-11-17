import re

# 파일 경로
file_path = 'task/Technical Writing.md'
output_file_path = 'task/mb_links.txt'  # 결과를 저장할 파일 경로

# 하이퍼링크를 추출하고 mb로 변환하는 함수
def extract_links_to_mb(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
        
        # 정규 표현식을 사용하여 하이퍼링크 추출
        links = re.findall(r'https?://[^\s]+', content)
        
        # mb로 변환
        mb_links = [link.replace('https://', 'mb://').replace('http://', 'mb://') for link in links]
        
        return mb_links

# 링크 추출 및 변환
mb_links = extract_links_to_mb(file_path)

# 결과를 파일에 저장
with open(output_file_path, 'w', encoding='utf-8') as output_file:
    for link in mb_links:
        output_file.write(link + '\n')

print(f"mb 링크가 '{output_file_path}' 파일에 저장되었습니다.")